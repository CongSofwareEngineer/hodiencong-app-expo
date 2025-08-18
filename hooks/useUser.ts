import { userZustand } from '@/zustand/user'

export const useUser = () => {
  const { setUser, user } = userZustand((state) => state)
  const login = async (userName: string, password: string) => { }

  const logOut = async () => {
    setUser(null)
  }
  return {
    setUser,
    user,
    login,
    logOut,
    isLogin: !!user,
  }
}