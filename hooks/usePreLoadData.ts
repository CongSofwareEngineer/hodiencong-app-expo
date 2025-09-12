import { useLayoutEffect } from 'react'
import { useColorScheme } from 'react-native'

import { getSecureData } from '@/utils/secureStorage'
import { hydrateZustand } from '@/zustand/hydrate'
import { KEY_STORAGE } from '@/constants/storage'
import { getDataLocal } from '@/utils/Storage'
import { MODE } from '@/constants/app'

import { useUser } from './useUser'
import useMode from './useMode'

const usePreLoadData = () => {
  const { setUser } = useUser()
  const { setMode } = useMode()
  const { setHydrate } = hydrateZustand()
  const colorScheme = useColorScheme()

  useLayoutEffect(() => {
    const modeLocal = getDataLocal(KEY_STORAGE.Mode)

    if (!modeLocal) {
      setMode(colorScheme === 'dark' ? MODE.Dark : MODE.Light)
    }
  }, [colorScheme, setMode])

  useLayoutEffect(() => {
    const getDataSecure = async () => {
      const user = await getSecureData(KEY_STORAGE.UserData)

      if (user) {
        setUser(user)
      }
      setTimeout(() => {
        setHydrate(true)
      }, 100)
    }

    getDataSecure()
  }, [setHydrate, setUser])
}

export default usePreLoadData
