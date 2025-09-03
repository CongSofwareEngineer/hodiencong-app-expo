import Ionicons from '@expo/vector-icons/Ionicons'
import { Modal, SafeAreaView, ScrollView, StyleSheet, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native'

import useModal from '@/hooks/useModal'
import { useThemeColor } from '@/hooks/useThemeColor'

const MyModal = () => {
  const { modal, closeModal } = useModal()
  const backgroundModal = useThemeColor('backgroundModal')
  const backgroundContentModal = useThemeColor('backgroundContentModal')
  const color = useThemeColor('text')

  return (
    <>
      {modal?.map((modal, index) => (
        <Modal
          {...modal.config}
          style={{
            backgroundColor: '#000000b3',
          }}
          animationType='fade'
          transparent={true}
          visible={modal?.open}
          onRequestClose={() => {
            closeModal()
            modal?.onClose?.()
          }}
          key={`modal-${index}`}
        >
          <ScrollView
            contentContainerStyle={[
              styles.root,
              {
                backgroundColor: backgroundModal,
              },
            ]}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                if (modal?.maskClosable) {
                  closeModal()
                  modal?.onClose?.()
                }
              }}
            >
              <SafeAreaView style={styles.root}>
                <TouchableWithoutFeedback>
                  <View
                    style={[
                      styles.content,
                      {
                        backgroundColor: backgroundContentModal,
                      },
                    ]}
                  >
                    {modal?.showIconClose && (
                      <TouchableOpacity
                        style={styles.iconClose}
                        onPress={() => {
                          closeModal()
                          modal?.onClose?.()
                        }}
                      >
                        <Ionicons name='close' size={24} color={color} />
                      </TouchableOpacity>
                    )}

                    {modal.content}
                  </View>
                </TouchableWithoutFeedback>
              </SafeAreaView>
            </TouchableWithoutFeedback>
          </ScrollView>
        </Modal>
      ))}
    </>
  )
}

export default MyModal

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 10,
  },
  content: {
    borderRadius: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  // flex flex-row justify-end absolute text-right w-full right-[5px] top-[5px]
  iconClose: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'right',
    position: 'absolute',
    right: 3,
    top: 3,
    padding: 5,
    zIndex: 1,
  },
})
