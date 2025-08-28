import React, { useEffect } from 'react'
import * as Notifications from 'expo-notifications'

export default function NotificationAndroid() {
  useEffect(() => {
    Notifications.getNotificationChannelsAsync().then((value) => setChannels(value ?? []))
  }, [])

  return <></>
}
