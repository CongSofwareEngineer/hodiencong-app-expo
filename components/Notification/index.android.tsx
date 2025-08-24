import { View, Text } from 'react-native'
import React from 'react'

export default function NotificationAndroid() {

  useEffect(() => {
     Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
  
    return () => {
      second
    }
  }, [third])
  
  return (
     <></>
  )
}
