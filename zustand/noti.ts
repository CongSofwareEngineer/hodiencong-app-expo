import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import * as Notifications from 'expo-notifications'

import { getDataLocal, removeDataLocal, saveDataLocal } from '@/utils/Storage'
import { KEY_STORAGE } from '@/constants/storage'

type NotificationsState = {
  notification: Notifications.PermissionStatus | null
  token?: {
    tokenExpo: string
    tokenNoti: string
  }
  setToken: (token: { tokenExpo: string; tokenNoti: string }) => void
  setNotifications: (notification: Notifications.PermissionStatus | null) => void
}

const notificationZustand = create<NotificationsState>()(
  devtools(
    persist(
      (set) => ({
        notification: null,

        setToken: (token: { tokenExpo: string; tokenNoti: string }) => {
          set({ token })
        },
        setNotifications: (notification: Notifications.PermissionStatus | null) => {
          set({ notification })
        },
      }),
      {
        storage: {
          getItem: () => {
            const notification = getDataLocal(KEY_STORAGE.Notification)

            if (notification) {
              return {
                state: {
                  notification: notification.notification,
                  token: notification.token,
                },
              }
            }

            return null
          },
          removeItem: () => {
            removeDataLocal(KEY_STORAGE.Language)
          },
          setItem: (_, value) => {
            const notification = {
              notification: value.state.notification,
              token: value.state.token,
            }

            saveDataLocal(KEY_STORAGE.Notification, notification)
          },
        },
        name: 'notification-zustand',
      }
    ),
    {
      name: 'notification-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)

export default notificationZustand
