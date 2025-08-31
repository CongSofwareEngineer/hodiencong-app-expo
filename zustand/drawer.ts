import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type {} from 'react-native-drawer-layout'
import { ModalProps } from 'react-native-modal'

type Drawer = {
  afterClose?: () => any
  position?: 'left' | 'right' | 'top' | 'bottom'
  maskClose?: boolean
  showTopLine?: boolean
  height?: number
  width?: number
} & Partial<ModalProps>

type DrawerState = {
  drawer: Drawer
  openDrawer: (param?: Drawer) => void
  closeDrawer: () => void
}

export const drawerZustand = create<DrawerState>()(
  devtools(
    (set, get) => ({
      drawer: {},

      openDrawer: (drawer: Drawer) => {
        set({
          drawer: {
            // height: height(60),
            // width: width(100),
            maskClose: true,
            showTopLine: true,
            ...drawer,
            position: drawer.position || 'bottom',
            animationIn: drawer?.animationIn || 'fadeInUp',
            isVisible: true,
          },
        })
      },
      closeDrawer: () => {
        const drawer = get().drawer

        drawer?.afterClose?.()

        set({
          drawer: {
            ...drawer,
            children: null,
            isVisible: false,
          },
        })
      },
    }),
    {
      name: 'drawer-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)

const useDrawer = () => {
  return drawerZustand((state) => state)
}

export default useDrawer
