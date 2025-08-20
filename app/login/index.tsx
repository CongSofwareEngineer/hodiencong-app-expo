// import { useForm } from 'react-hook-form'
import { Image, KeyboardAvoidingView } from 'react-native'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'expo-router'

import useLanguage from '@/hooks/useLanguage'
import { isIos } from '@/utils/functions'
import SafeAreaView from '@/components/SafeAreaView'
import InputForm from '@/components/ui/InputForm'
import ThemedTouchable from '@/components/ThemedTouchable'
import images from '@/config/image'

import styles from './styles'

interface FormLogin {
  userName: string
  password: string
}
export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false)

  const { translate } = useLanguage()
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<FormLogin>()

  const handleLogin = async (data: FormLogin) => {
    try {
      setIsLoading(true)
      console.log({ data })
      if (data.userName !== 'admin' || data.password !== 'password') {
        setError('userName', { type: 'custom', message: 'Tài khoản không đúng' })
        setError('password', { type: 'custom', message: 'Mật khẩu không đúng' })

        return
      }
      if (data.userName === 'admin' && data.password === 'password') {
        router.replace('/home')
        // router.()
        // router.push('/home', { withAnchor: false, relativeToDirectory: false })
      }
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  console.log({ errors: errors?.userName?.message })

  return (
    <KeyboardAvoidingView behavior={isIos() ? 'padding' : undefined} style={styles.container}>
      <SafeAreaView style={styles.containerSafeArea}>
        <Image
          source={images.logo}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
          }}
        />
        <InputForm
          placeholder={translate('placeholder.enterUserName')}
          required
          label={translate('userName')}
          control={control}
          name='userName'
          errorsText={errors?.userName?.message}
          errors={errors?.userName ? 'required' : ''}
        />
        <InputForm
          placeholder={translate('placeholder.enterPassword')}
          errorsText={errors?.password?.message}
          required
          label={translate('password')}
          control={control}
          name='password'
          errors={errors?.password ? 'required' : ''}
        />
        <ThemedTouchable onPress={handleSubmit(handleLogin)} loading={isLoading} style={styles.btnLogin}>
          {translate('common.login')}
        </ThemedTouchable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
