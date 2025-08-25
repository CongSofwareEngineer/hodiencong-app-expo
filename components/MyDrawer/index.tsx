import { ReactNode, useEffect, useState } from 'react'
import { Drawer } from 'react-native-drawer-layout'

import useDrawer from '@/zustand/drawer'

import SafeAreaView from '../SafeAreaView'
import ThemedScrollView from '../ui/ThemedScrollView'

import styles from './style'

const MyDrawer = ({ children }: { children: ReactNode }) => {
  const { closeDrawer, drawer } = useDrawer()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (drawer?.open) {
      setOpen(true)
    }
  }, [drawer?.open])

  useEffect(() => {
    if (drawer?.open && !open) {
      closeDrawer()
    }
  }, [open])

  return (
    <Drawer
      {...drawer}
      open={drawer.open || false}
      onOpen={() => setOpen(true)}
      onClose={() => {
        setOpen(false)
      }}
      renderDrawerContent={() => {
        return (
          <ThemedScrollView style={styles.container}>
            <SafeAreaView>{drawer.content}</SafeAreaView>
          </ThemedScrollView>
        )
      }}
    >
      {children}
    </Drawer>
  )
}

export default MyDrawer
