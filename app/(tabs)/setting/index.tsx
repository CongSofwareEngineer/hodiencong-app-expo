import { useRouter } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedText from '@/components/ui/ThemedText'
import { Colors } from '@/constants/Colors'
import useLanguage from '@/hooks/useLanguage'
import useModal from '@/hooks/useModal'
import useMode from '@/hooks/useMode'
import { useUser } from '@/hooks/useUser'
import ThemedCheckbox from '@/components/ui/ThemedCheckbox'
import { MODE } from '@/constants/app'
import SafeAreaView from '@/components/SafeAreaView'
import { LANGUAGE_SUPPORT } from '@/type/language'

import { styles } from './styles'

const SettingScreen = () => {
  const { translate, lang } = useLanguage()
  const { mode, setMode } = useMode()
  const { setUser } = useUser()
  const { openModal } = useModal()
  const router = useRouter()

  const handleLogout = async () => {
    const callback = async () => {
      setUser(null)
      router.replace('/login')
    }

    // openModal({
    //   content: <ModalWarning onSubmit={callback} title={translate('warning.logout')} />,
    // })
  }

  return (
    <ThemedScrollView>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.containerItem]}>
          <ThemedText type='subtitle' style={{ width: '100%', textAlign: 'center', marginTop: 20 }}>{`${translate('setting.titlePage')}`}</ThemedText>
          <ThemedText>{`${translate('setting.darkMode')}`}</ThemedText>
          <View style={styles.containerItemSub}>
            <ThemedCheckbox onChange={(e) => setMode(MODE.Dark)} checked={mode === MODE.Dark}>
              <ThemedText>{translate('setting.dark')}</ThemedText>
            </ThemedCheckbox>
            <ThemedCheckbox onChange={(e) => setMode(MODE.Light)} checked={mode === MODE.Light}>
              <ThemedText>{translate('setting.light')}</ThemedText>
            </ThemedCheckbox>
          </View>
        </View>

        <View style={[styles.containerItem]}>
          <ThemedText>{`${translate('setting.language')} :`}</ThemedText>
          <View style={styles.containerItemSub}>
            <ThemedCheckbox checked={lang === LANGUAGE_SUPPORT.EN}>
              <ThemedText>Vietnamese</ThemedText>
            </ThemedCheckbox>
            <ThemedCheckbox>
              <ThemedText>English</ThemedText>
            </ThemedCheckbox>
          </View>
        </View>

        <ThemedText
          style={{
            color: Colors.red,
          }}
          onPress={() => {
            console.log('logout')
            handleLogout()
          }}
        >
          {translate('common.logout')}
        </ThemedText>
      </SafeAreaView>
    </ThemedScrollView>
  )
}

export default SettingScreen
