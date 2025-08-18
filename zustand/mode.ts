import { MODE } from '@/constants/app'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type ModeState = {
  mode: MODE
  setMode: (mode: MODE) => void
}
export const modeZustand = create<ModeState>()(
  devtools(
    (set) => ({
      mode: MODE.Light,

      setMode: (mode: MODE) => {


        set({
          mode: mode
        })

      },
    }),
    {
      name: 'mode-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)