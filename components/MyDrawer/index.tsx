import Modal from 'react-native-modal'
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

import useDrawer from '@/zustand/drawer'
import { height, width } from '@/utils/Systems'
import { useThemeColor } from '@/hooks/useThemeColor'

import SafeAreaView from '../SafeAreaView'

import styles from './style'

const MyDrawer = () => {
  const { closeDrawer, drawer } = useDrawer()
  const backgroundColor = useThemeColor('background')

  return drawer?.isVisible ? (
    <Modal
      scrollHorizontal
      deviceWidth={width(100)}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
        height: height(100),
      }}
      hasBackdrop
      onBackdropPress={() => {
        if (drawer?.maskClose) {
          closeDrawer()
        }
      }}
      onSwipeCancel={(gestureState) => {
        const heightTemp = drawer?.height || height(75)

        if (gestureState.moveY > 0 && gestureState.moveY > heightTemp) {
          closeDrawer()
        }
      }}
      onModalWillHide={closeDrawer}
      swipeDirection={['down']}
      {...(drawer as any)}
      isVisible={drawer?.isVisible}
    >
      <SafeAreaView
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor,
            height: drawer?.height || height(75),
            maxHeight: drawer?.height || height(75),
            width: drawer?.width || width(100),
          },
        ]}
      >
        {drawer?.showTopLine && (
          <TouchableOpacity
            onPress={() => {
              closeDrawer()
            }}
          >
            <View style={styles.topLine} />
          </TouchableOpacity>
        )}

        <ScrollView style={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback>{drawer?.children}</TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  ) : (
    <></>
  )
}

export default MyDrawer
