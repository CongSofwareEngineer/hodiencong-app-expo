import { lazy, ReactNode } from 'react'
import { Platform, SafeAreaView } from 'react-native'

const MyModal = lazy(() => import('../MyModal'))
const MyDrawer = lazy(() => import('../MyDrawer'))
const ClientRender = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {Platform.OS === 'ios' ? children : <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>}
      <MyModal />
      <MyDrawer />
    </>
  )
}

export default ClientRender
