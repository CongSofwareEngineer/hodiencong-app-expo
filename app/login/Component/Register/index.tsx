import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import ThemedTouchable from '@/components/ThemedTouchable'
import InputForm from '@/components/ui/InputForm'
import useLanguage from '@/hooks/useLanguage'

import styles from '../../styles'

interface FormLogin {
  userName: string
  password: string
  passwordConfirm: string
}

const Register = () => {
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
    <View style={styles.containerForm}>
      <ThemedText style={{ textAlign: 'center' }} type='subtitle'>
        {translate('login.welcome')}
      </ThemedText>
      <ThemedText style={{ textAlign: 'center', marginBottom: 30 }}>{translate('register.registerToContinue')}</ThemedText>
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
      <InputForm
        placeholder={translate('placeholder.enterPasswordAgain')}
        errorsText={errors?.passwordConfirm?.message}
        required
        label={translate('textPopular.passwordAgain')}
        control={control}
        name='passwordConfirm'
        errors={errors?.passwordConfirm ? 'required' : ''}
      />
      <ThemedTouchable onPress={handleSubmit(handleLogin)} loading={isLoading} style={styles.btnLogin}>
        {translate('common.register')}
      </ThemedTouchable>
    </View>
  )
}

export default Register
