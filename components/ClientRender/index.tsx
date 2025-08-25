import { lazy, ReactNode } from 'react'

// import MyModal from '../MyModal'
// import MyDrawer from '../MyDrawer'
const MyModal = lazy(() => import('../MyModal'))
const ClientRender = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <MyModal />
    </>
  )
}

export default ClientRender
