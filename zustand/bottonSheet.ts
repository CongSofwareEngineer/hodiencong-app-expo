import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type BottomSheet = {
  open?: boolean
  content?: React.ReactNode
  afterClose?: () => any
  onClose?: () => any
  showIconClose?: boolean
  maskClosable?: boolean
}

type BottomSheetState = {
  bottomSheet: BottomSheet
  openBottomSheet: (param?: BottomSheet) => void
  closeBottomSheet: () => void
}

export const bottomSheetZustand = create<BottomSheetState>()(
  devtools(
    (set, get) => ({
      bottomSheet: {},

      openBottomSheet: (bottomSheet?: BottomSheet) => {
        console.log('====================================')
        console.log({ bottomSheet })
        console.log('====================================')
        set({
          bottomSheet: {
            ...bottomSheet,
            open: true,
          },
        })
      },
      closeBottomSheet: () => {
        const BottomSheet = get().bottomSheet

        BottomSheet?.afterClose?.()

        set({
          bottomSheet: {
            ...BottomSheet,
            content: null,
            open: false,
          },
        })
      },
    }),
    {
      name: 'bottomSheet-zustand',
      enabled: process.env.NEXT_PUBLIC_ENV !== 'production',
    }
  )
)

const useBottomSheet = () => {
  return bottomSheetZustand((state) => state)
}

export default useBottomSheet
