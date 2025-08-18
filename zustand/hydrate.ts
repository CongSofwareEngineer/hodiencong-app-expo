
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'



interface HydrateState {
  hydrate: boolean
  setHydrate: (hydrate: boolean) => void
}
export const hydrateZustand = create<HydrateState>()(
  devtools(
    (set) => ({
      hydrate: false,
      setHydrate: (hydrate: boolean) => {
        set({ hydrate })
      },
    }),
    {
      name: 'hydrate-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)
