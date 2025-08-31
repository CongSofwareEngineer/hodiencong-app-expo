import { Link } from 'expo-router'
import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'

import ThemedInput from '@/components/ui/ThemedInput'
import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedText from '@/components/ui/ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'
import useModal from '@/hooks/useModal'
import SafeAreaView from '@/components/SafeAreaView'
import ThemedTouchable from '@/components/ThemedTouchable'
import useMode from '@/hooks/useMode'

import styles from './style'

const HomeScreen = () => {
  const [text, settext] = useState('')
  const { openModal, closeModal } = useModal()
  const colorText = useThemeColor('text')
  const { mode } = useMode()

  const handleLogin = () => {
    openModal({
      content: (
        <View style={{ padding: 20 }}>
          <ThemedText>Login successful!</ThemedText>
          <TouchableOpacity onPress={closeModal}>
            <ThemedText type='link'>Close</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin2}>
            <ThemedText type='link'>handleLogin2</ThemedText>
          </TouchableOpacity>
        </View>
      ),
    })
  }

  const handleLogin2 = () => {
    openModal({
      content: (
        <View style={{ padding: 20 }}>
          <ThemedText>handleLogin2</ThemedText>
          <TouchableOpacity onPress={closeModal}>
            <ThemedText type='link'>Close</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin}>
            <ThemedText type='link'>handleLogin</ThemedText>
          </TouchableOpacity>
        </View>
      ),
      addModal: true,
    })
  }

  return (
    <ThemedScrollView style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            width: '100%',
            gap: 8,
          }}
        >
          <ThemedText>Home</ThemedText>
        </View>

        <ThemedTouchable onPress={handleLogin} style={{ marginVertical: 20 }}>
          open Modal
        </ThemedTouchable>
        <ThemedText>{`mode : ${mode}`}</ThemedText>

        <ThemedInput
          showCount
          leftIcon={<AntDesign name='setting' size={24} color={colorText} />}
          rightIcon={<AntDesign name='setting' size={24} color={colorText} />}
          value={text}
          onChangeText={settext}
          label='Input'
          placeholder='Input'
        />
        <Link href={'/login'}>
          <ThemedText type='link'>Product</ThemedText>
        </Link>
        <Link href={'/tc-store/production'}>
          <ThemedText type='link'>Product</ThemedText>
        </Link>
      </SafeAreaView>
    </ThemedScrollView>
  )
}

export default HomeScreen
