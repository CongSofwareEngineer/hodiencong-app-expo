import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import { Platform } from 'react-native'

import notificationZustand from '@/zustand/noti'

const useNotification = () => {
  const { notification, setNotifications, setToken, token } = notificationZustand((state) => state)

  const requestNotifications = async () => {
    try {
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        })
      }
      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync()
        let finalStatus = existingStatus

        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync()

          finalStatus = status
        }
        if (finalStatus === 'granted') {
          const token = await Notifications.getExpoPushTokenAsync({
            projectId: process.env.EXPO_PUBLIC_EXPO_NOTIFICATION_PROJECT_ID,
          })

          setToken(token.data)
        }
        setNotifications(finalStatus)
      }
    } catch (error) {}
  }

  return {
    token,
    notification,
    setNotifications,
    requestNotifications,
    isHasNotification: notification === 'granted',
  }
}

export default useNotification
