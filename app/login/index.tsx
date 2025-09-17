// import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView, ScrollView, View } from 'react-native'
import { lazy, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { isIos } from '@/utils/functions'
import SafeAreaView from '@/components/SafeAreaView'
import { COLORS } from '@/constants/Colors'

import styles from './styles'
import TabOption from './Component/TabOption'
const Login = lazy(() => import('./Component/Login'))
const Register = lazy(() => import('./Component/Register'))

export type TabOptions = 'login' | 'register' | 'forgotPassword'

function LoginScreen() {
  const [tabs, setTabs] = useState<TabOptions>('login')

  return (
    <KeyboardAvoidingView behavior={isIos() ? 'padding' : 'height'} style={styles.container}>
      <SafeAreaView style={[styles.containerSafeArea, { backgroundColor: COLORS.green2 }]}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', gap: 20 }}>
          <View style={styles.logoContainer}>
            <FontAwesome name='home' size={50} color='white' />
          </View>
          <TabOption onChange={setTabs} value={tabs} />
          {tabs === 'login' ? <Login /> : <Register />}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
export default LoginScreen
