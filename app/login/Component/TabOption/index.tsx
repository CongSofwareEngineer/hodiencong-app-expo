import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import useLanguage from '@/hooks/useLanguage'
import useMode from '@/hooks/useMode'
import ThemedText from '@/components/ui/ThemedText'

import { TabOptions } from '../..'

import styles from './styles'

interface TabOptionProps {
  value: TabOptions
  onChange: (value: TabOptions) => void
}
const TabOption = ({ onChange, value }: TabOptionProps) => {
  const { translate } = useLanguage()
  const { mode } = useMode()

  return (
    <View style={[styles.container, styles[`container${mode}`]]}>
      <TouchableOpacity onPress={() => onChange('login')} style={[styles.btn, value === 'login' && styles[`btnActive${mode}`]]}>
        <ThemedText>{translate('login.titlePage')}</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChange('register')} style={[styles.btn, value === 'register' && styles[`btnActive${mode}`]]}>
        <ThemedText> {translate('common.register')}</ThemedText>
      </TouchableOpacity>
    </View>
  )
}

export default TabOption
