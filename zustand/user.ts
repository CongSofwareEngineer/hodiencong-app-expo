
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


interface UserProps {
  userName: string
  password: string
  token: string
  tokenRefresh: string
  age: number
  [key: string]: unknown
}
interface UserState {
  user: UserProps | null
  hydrate: boolean
  setUser: (user: UserProps | null) => void
}
export const userZustand = create<UserState>()(
  devtools(
    (set) => ({
      hydrate: false,
      user: null,
      setUser: (user: UserProps | null) => {
        set({ user: user })
      },
    }),
    {
      name: 'user-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)
