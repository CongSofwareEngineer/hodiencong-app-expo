import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type Drawer = {
  // config?: DrawerPackage
  open?: boolean
  content?: React.ReactNode
  afterClose?: () => any
  onClose?: () => any
  showIconClose?: boolean
  maskClosable?: boolean
}

type DrawerState = {
  drawer: Drawer
  openDrawer: (param?: Drawer) => void
  closeDrawer: () => void
}

export const drawerZustand = create<DrawerState>()(
  devtools(
    (set, get) => ({
      drawer: [],

      openDrawer: (drawer?: Drawer) => {
        set({ drawer })
      },
      closeDrawer: () => {
        const drawer = get().drawer

        drawer?.afterClose?.()

        set({
          drawer: {
            content: null,
            open: false,
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
