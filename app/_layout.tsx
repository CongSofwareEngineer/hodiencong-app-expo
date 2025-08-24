import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'

import ClientRender from '@/components/ClientRender'
import ReactQueryProvider from '@/components/ReactQueryProvider'
import useMode from '@/hooks/useMode'
import usePreLoadData from '@/hooks/usePreLoadData'
import { hydrateZustand } from '@/zustand/hydrate'
import { MODE } from '@/constants/app'
import StackScreen from '@/components/StackScreen'
import useNotification from '@/hooks/useNotification'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
})

export default function RootLayout() {
  usePreLoadData()
  const { isHasNotification, token, requestNotifications } = useNotification()
  const { mode: colorScheme } = useMode()
  const { hydrate } = hydrateZustand()

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  console.log({ isHasNotification })

  useEffect(() => {
    requestNotifications()
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
