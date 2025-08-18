import { ReactNode } from 'react'
import MyModal from '../MyModal'

const ClientRender = ({ children }: { children: ReactNode }) => {


  return (
    <>
      {children}
      <MyModal />
    </>
  )
}

export default ClientRender