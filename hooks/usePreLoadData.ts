import { useLayoutEffect } from 'react'

import { KEY_CHAIN } from '@/constants/keyChain'
import { getSecureData } from '@/utils/secureStorage'
import { hydrateZustand } from '@/zustand/hydrate'

import { useUser } from './useUser'

const usePreLoadData = () => {
  const { setUser } = useUser()
  const { setHydrate } = hydrateZustand()

  useLayoutEffect(() => {
    const getData = async () => {
      const user = await getSecureData(KEY_CHAIN.UserData)

      if (user) {
        setUser(user)
      }
      setTimeout(() => {
        setHydrate(true)
      }, 100)
    }

    getData()
  }, [setHydrate, setUser])
}

export default usePreLoadData
