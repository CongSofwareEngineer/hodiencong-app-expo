import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { bottomSheetZustand } from '@/zustand/bottonSheet'

const MyBottomSheet = ({ children }: { children: React.ReactNode }) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  const { bottomSheet, closeBottomSheet } = bottomSheetZustand((state) => state)
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], [])

  useEffect(() => {
    if (bottomSheet?.open) {
      bottomSheetModalRef.current?.present()
    }
  }, [bottomSheet?.open])

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      closeBottomSheet()
    }
  }, [])

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1} // ẩn khi sheet đóng
        appearsOnIndex={0} // hiện khi sheet mở
        style={[props.style, { backgroundColor: 'rgba(5, 5, 5, 0.908)' }]}
      />
    ),
    []
  )

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        {children}

        <BottomSheetModal
          index={1}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}
          style={{
            backgroundColor: 'red',
          }}
          maxDynamicContentSize={100}
        >
          <BottomSheetView style={styles.contentContainer}>
            <SafeAreaView>{bottomSheet.content}</SafeAreaView>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundPosition: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
  },
})

export default MyBottomSheet
