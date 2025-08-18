import { Link } from 'expo-router'
import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-paper'

import ThemedInput from '@/components/ui/ThemedInput'
import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedText from '@/components/ui/ThemedText'
import { IconSymbol } from '@/components/ui/IconSymbol'
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
          width: '100%',
          gap: 8,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 0,
          }}
        >
          <TextInput
            style={{
              color: 'white',
              width: '100%',
            }}
            mode='outlined'
            label={'Input'}
            left={
              <TextInput.Icon
                onPress={() => {
                  console.log('click icon')
                }}
                icon={'account'}
                size={24}
                color={'#11181C'}
              />
            }
            right={<TextInput.Affix text='sdhgfsjdhgf' />}
            // <AntDesign name='setting' size={24} color={'#11181C'} />}
            value={text}
            onChangeText={settext}
          />
        </View>
      </View>

      <ThemedInput
        leftIcon={<IconSymbol name='0.circle.fill' size={24} color={'red'} />}
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
    </ThemedScrollView>
  )
}

export default HomeScreen
