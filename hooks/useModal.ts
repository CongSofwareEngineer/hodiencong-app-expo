import { useColorScheme } from 'react-native'

import { modalZustand } from '@/zustand/modal'

const useModal = () => {
  const modal = modalZustand((state) => state)

  useColorScheme()

  return modal
}

export default useModal
