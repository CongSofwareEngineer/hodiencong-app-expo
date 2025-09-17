import { lazy, ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const MyModal = lazy(() => import('../MyModal'))
const MyDrawer = lazy(() => import('../MyDrawer'))
const ClientRender = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {children}
      <MyModal />
      <MyDrawer />
    </SafeAreaView>
  )
}

export default ClientRender
