import { languageZustand } from '@/zustand/language'
import { ReactNode, useEffect } from 'react'

const ClientRender = ({ children }: { children: ReactNode }) => {
  const { language } = languageZustand(state => state)
  useEffect(() => {
    console.log('====================================');
    console.log({ language });
    console.log('====================================');
  }, [language])

  return (
    children
  )
}

export default ClientRender