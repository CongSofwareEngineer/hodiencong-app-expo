import Ionicons from '@expo/vector-icons/Ionicons'
import { Modal, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

import useModal from '@/hooks/useModal'
import { useThemeColor } from '@/hooks/useThemeColor'

const MyModal = () => {
  const { modal, closeModal } = useModal()
  const backgroundModal = useThemeColor('backgroundModal')
  const backgroundContentModal = ('backgroundContentModal')
  const color = useThemeColor('text')

  return <>
    {
      modal?.map((modal, index) => (
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
            <SafeAreaView className='flex p-5' style={styles.root}>
              <View className='p-5'>
                <View
                  style={[
                    styles.content,
                    {
                      backgroundColor: backgroundContentModal,
                    },
                  ]}
                  className='rounded-lg  p-3'
                >
                  {modal?.showIconClose && (
                    <View style={styles.iconClose}>
                      <Ionicons
                        name='close'
                        size={24}
                        color={color}
                        onPress={() => {
                          closeModal()
                          modal?.onClose?.()
                        }}
                      />
                    </View>
                  )}

                  {modal.content}
                </View>
              </View>
            </SafeAreaView>
          </ScrollView>
        </Modal>
      ))
    }
  </>
}

export default MyModal

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    borderRadius: 8,
    padding: 20,
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
    width: '100%',
    position: 'absolute',
    right: 5,
    top: 5,
  },
})