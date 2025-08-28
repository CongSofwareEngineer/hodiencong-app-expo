import { lazy, ReactNode } from 'react'

// import MyModal from '../MyModal'
const MyModal = lazy(() => import('../MyModal'))
const MyDrawer = lazy(() => import('../MyDrawer'))
const ClientRender = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <MyModal />
      <MyDrawer />
    </>
  )
}

export default ClientRender
