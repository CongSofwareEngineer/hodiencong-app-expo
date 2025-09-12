import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { MODE } from '@/constants/app'
import { KEY_STORAGE } from '@/constants/storage'
import { getDataLocal, removeDataLocal, saveDataLocal } from '@/utils/Storage'

type ModeState = {
  mode: MODE
  setMode: (mode: MODE) => void
}
export const modeZustand = create<ModeState>()(
  devtools(
    persist(
      (set) => ({
        mode: MODE.Light,
        setMode: (mode: MODE) => set({ mode }),
      }),
      {
        storage: {
          getItem: () => {
            const mode = getDataLocal(KEY_STORAGE.Mode)

            return {
              state: {
                mode: mode || MODE.Light,
              },
            }
          },
          removeItem: () => {
            removeDataLocal(KEY_STORAGE.Mode)
          },
          setItem: (_, value) => {
            saveDataLocal(KEY_STORAGE.Mode, value.state.mode)
          },
        },
        name: 'mode-zustand',
      }
    ),
    {
      name: 'mode-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)
