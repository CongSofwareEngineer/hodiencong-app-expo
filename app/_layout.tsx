import 'react-native-reanimated'
import '@walletconnect/react-native-compat'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging'
import { useLinkingURL, parse } from 'expo-linking'
import { useRouter } from 'expo-router'

import ClientRender from '@/components/ClientRender'
import ReactQueryProvider from '@/components/ReactQueryProvider'
import useMode from '@/hooks/useMode'
import usePreLoadData from '@/hooks/usePreLoadData'
import { hydrateZustand } from '@/zustand/hydrate'
import { MODE } from '@/constants/app'
import StackScreen from '@/components/StackScreen'
import useNotification from '@/hooks/useNotification'
import { setupReactotron } from '@/config/reactotron'
import useWalletConnect from '@/hooks/useWalletConnect'

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

Notifications.setNotificationHandler({
  handleNotification: async (e) => {
    console.log({ handleNotificationIsRunning: e })
    ;(async () => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "You've got mail! 📬",
          sound: 'mySoundFile.wav', // Provide ONLY the base filename
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 2,
          channelId: 'new_emails',
        },
      })
    })()

    return {
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowBanner: true,
      shouldShowList: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
    }
  },
})

// Notifications.addNotificationReceivedListener((notification) => {
//   console.log({ notificationListener: notification })
// })

// Notifications.addNotificationResponseReceivedListener((response) => {
//   console.log({ responseListener: response })
// })
export default function RootLayout() {
  // Initialize Reactotron in dev
  if (process.env.EXPO_PUBLIC_MODE !== 'production') {
    setupReactotron()
  }

  usePreLoadData()
  const { subscribe } = useWalletConnect()
  const url = useLinkingURL()
  const router = useRouter()
  const { isHasNotification, token, requestNotifications } = useNotification()
  const { mode: colorScheme } = useMode()
  const { hydrate } = hydrateZustand()

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (token?.tokenNoti && isHasNotification) {
      subscribe()
    }
  }, [token && isHasNotification])

  useEffect(() => {
    if (url) {
      const { hostname, path, queryParams } = parse(url)

      console.log({ hostname, path, queryParams })
      if (queryParams?.wc) {
        // router.replace('approve-wc')
      }
    }
  }, [url, router])

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

  // useEffect(() => {
  //   if (isHasNotification && token) {
  //     const notificationListener = Notifications.addNotificationReceivedListener((notification) => {
  //       console.log({ notificationListener: notification })
  //     })

  //     const responseListener = Notifications.addNotificationResponseReceivedListener((response) => {
  //       console.log({ responseListener: response })
  //     })

  //     return () => {
  //       notificationListener.remove()
  //       responseListener.remove()
  //     }
  //   }
  // }, [isHasNotification, token])

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
