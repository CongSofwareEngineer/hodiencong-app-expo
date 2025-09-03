import 'react-native-reanimated'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'
import Constants from 'expo-constants'
import { Text, View } from 'react-native'
import messaging from '@react-native-firebase/messaging'

import ClientRender from '@/components/ClientRender'
import ReactQueryProvider from '@/components/ReactQueryProvider'
import useMode from '@/hooks/useMode'
import usePreLoadData from '@/hooks/usePreLoadData'
import { hydrateZustand } from '@/zustand/hydrate'
import { MODE } from '@/constants/app'
import StackScreen from '@/components/StackScreen'
import useNotification from '@/hooks/useNotification'

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage)
  Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
    },
    trigger: null,
    // trigger: {
    //   type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
    //   seconds: 2,
    //   channelId: 'new_emails',
    // },
  })
})

// const BACKGROUND_NOTIFICATION_TASK = 'BACKGROUND-NOTIFICATION-TASK'

// Notifications.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK)

// Notifications.setNotificationHandler({
//   handleNotification: async (e) => {
//     console.log({ handleNotificationIsRunning: e })
//     ;(async () => {
//       await Notifications.scheduleNotificationAsync({
//         content: {
//           title: "You've got mail! 📬",
//           sound: 'mySoundFile.wav', // Provide ONLY the base filename
//         },
//         trigger: {
//           type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
//           seconds: 2,
//           channelId: 'new_emails',
//         },
//       })
//     })()

//     return {
//       shouldPlaySound: true,
//       shouldSetBadge: true,
//       shouldShowBanner: true,
//       shouldShowList: true,
//       priority: Notifications.AndroidNotificationPriority.HIGH,
//     }
//   },
// })

export default function RootLayout() {
  usePreLoadData()
  const { isHasNotification, token, requestNotifications } = useNotification()
  const { mode: colorScheme } = useMode()
  const { hydrate } = hydrateZustand()

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    requestNotifications()

    // messaging().onMessage((message) => {
    //   console.log({ message })
    //   Notifications.scheduleNotificationAsync({
    //     content: {
    //       title: "You've got mail! 📬",
    //       sound: 'mySoundFile.wav', // Provide ONLY the base filename
    //     },
    //     trigger: {
    //       type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
    //       seconds: 2,
    //       channelId: 'new_emails',
    //     },
    //   })
    // })
    return () => {}
  }, [])

  useEffect(() => {
    if (isHasNotification && token) {
      const notificationListener = Notifications.addNotificationReceivedListener((notification) => {
        console.log({ notification })
      })

      const responseListener = Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response)
      })

      return () => {
        notificationListener.remove()
        responseListener.remove()
      }
    }
  }, [isHasNotification, token])
  console.log({ isHeadless: Constants.isHeadless })

  if (Constants.isHeadless) {
    return (
      <View>
        <Text>Headless</Text>
      </View>
    )
  }

  if (!loaded || !hydrate) {
    return null
  }

  return (
    <ReactQueryProvider>
      <ThemeProvider value={colorScheme === MODE.Dark ? DarkTheme : DefaultTheme}>
        <ClientRender>
          <StackScreen />
          <StatusBar style={colorScheme === MODE.Dark ? 'light' : 'dark'} />
        </ClientRender>
      </ThemeProvider>
    </ReactQueryProvider>
  )
}
