import { Link } from 'expo-router'
import React, { useState } from 'react'
import { View, TextInput as TextInputBase, TouchableOpacity } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'

import ThemedInput from '@/components/ui/ThemedInput'
import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedText from '@/components/ui/ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'

import { styles } from './style'

const HomeScreen = () => {
  const [text, settext] = useState('')
  const colorIcon = useThemeColor('icon')
  const colorText = useThemeColor('text')

  return (
    <ThemedScrollView style={styles.container}>
      <View
        style={{
          width: '100%',
          gap: 8,
        }}
      >
        <ThemedText>Home</ThemedText>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0,
          width: '100%',
        }}
      >
        <ThemedText>label</ThemedText>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 0,
          }}
        >
          <TouchableOpacity>
            <ThemedText>leftIcon</ThemedText>
          </TouchableOpacity>
          <TextInputBase placeholder='Input' style={{ flex: 1 }} value={text} onChangeText={settext} />
        </View>
      </View>

      <ThemedInput
        showCount
        leftIcon={<AntDesign name='setting' size={24} color={'#11181C'} />}
        rightIcon={<AntDesign name='setting' size={24} color={'#11181C'} />}
        value={text}
        onChangeText={settext}
        label='Input'
        placeholder='Input'
        maxLength={10}
      />
      <Link href={'/login'}>
        <ThemedText type='link'>Product</ThemedText>
      </Link>
      <Link href={'/tc-store/production'}>
        <ThemedText type='link'>Product</ThemedText>
      </Link>
    </ThemedScrollView>
  )
}

export default HomeScreen
