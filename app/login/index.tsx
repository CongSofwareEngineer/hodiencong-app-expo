// import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView, View } from 'react-native'
import { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { isIos } from '@/utils/functions'
import SafeAreaView from '@/components/SafeAreaView'
import { COLORS } from '@/constants/Colors'

import styles from './styles'
import Login from './Component/Login'
import TabOption from './Component/TabOption'
import Register from './Component/Register'

export type TabOptions = 'login' | 'register' | 'forgotPassword'
export default function LoginScreen() {
  const [tabs, setTabs] = useState<TabOptions>('login')

  return (
    <KeyboardAvoidingView behavior={isIos() ? 'padding' : undefined} style={styles.container}>
      <SafeAreaView style={[styles.containerSafeArea, { backgroundColor: COLORS.green2 }]}>
        <View style={styles.logoContainer}>
          <FontAwesome name='home' size={50} color='white' />
        </View>
        <TabOption onChange={setTabs} value={tabs} />
        {tabs === 'login' ? <Login /> : <Register />}
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
