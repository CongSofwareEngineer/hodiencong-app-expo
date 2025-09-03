import { KEY_CHAIN } from '@/constants/keyChain'
import { saveSecureData } from '@/utils/secureStorage'
import { userZustand } from '@/zustand/user'

export const useUser = () => {
  const { setUser, user } = userZustand((state) => state)
  const login = async (userName: string, password: string) => {
    setUser({
      age: 20,
      password: 'password',
      userName: 'admin',
      token: 'token',
      tokenRefresh: 'tokenRefresh',
    })
    await saveSecureData(KEY_CHAIN.UserData, {
      age: 20,
      password: 'password',
      userName: 'admin',
      token: 'token',
      tokenRefresh: 'tokenRefresh',
    })
  }

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
