import { MODE } from '@/constants/app'
import { KEY_STORAGE } from '@/constants/storage'
import { getDataLocal, removeDataLocal, saveDataLocal } from '@/utils/Storage'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

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
            if (mode) {
              return {
                state: {
                  mode
                }
              }
            }
            return null
          },
          removeItem: () => {
            removeDataLocal(KEY_STORAGE.Mode)

          },
          setItem: (_, value) => {
            const mode = value.state.mode
            saveDataLocal(KEY_STORAGE.Mode, mode)
          }
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