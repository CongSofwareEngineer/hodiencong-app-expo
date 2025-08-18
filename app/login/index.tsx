// import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView } from 'react-native'


import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedText from '@/components/ui/ThemedText'
import useLanguage from '@/hooks/useLanguage'
import { isIos } from '@/utils/functions'

export default function LoginScreen() {
  const { translate } = useLanguage()
  // const [isLoading, setIsLoading] = useState(false)

  // const { translate } = useLanguage()
  // const router = useRouter()
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  //   setValue,
  // } = useForm<FormLogin>()

  // useEffect(() => {
  //   setValue('userName', 'admin')
  //   setValue('password', 'password')
  // }, [setValue])

  // const handleLogin = async (data: FormLogin) => {
  //   setIsLoading(true)
  //   console.log({ data })
  //   await sleep(1000)
  //   if (data.userName === 'admin' && data.password === 'password') {
  //     router.replace('/home')
  //     // router.()
  //     // router.push('/home', { withAnchor: false, relativeToDirectory: false })
  //   }

  //   setIsLoading(false)
  // }

  return (
    <KeyboardAvoidingView behavior={isIos() ? 'padding' : undefined} className='flex-1 '>
      {/* <ThemedScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <ThemedText className='text-center mb-20' type='subtitle'>
          {translate('login.titlePage')}
        </ThemedText>
        <ThemedView className=' gap-5 '>
          <InputForm required label={translate('userName')} control={control} name='userName' errors={errors?.userName ? 'required' : ''} />
          <InputForm required label={translate('password')} control={control} name='password' errors={errors?.password ? 'required' : ''} />
          <ThemedTouchable onPress={handleSubmit(handleLogin)} loading={isLoading} className='item-center w-full'>
            {translate('common.login')}
          </ThemedTouchable>
        </ThemedView>
      </ThemedScrollView> */}
      <ThemedScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <ThemedText className='text-center mb-20' type='subtitle'>
          {translate('login.titlePage')}
        </ThemedText>

      </ThemedScrollView>
    </KeyboardAvoidingView>
  )
}