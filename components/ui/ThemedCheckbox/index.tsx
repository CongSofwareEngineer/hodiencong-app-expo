import Checkbox, { CheckboxProps } from 'expo-checkbox'
import React from 'react'
import { View } from 'react-native'

type Props = {
  children: React.ReactNode
  checked?: boolean
  configCheckbox?: CheckboxProps
  onChange?: (value: boolean) => void
}
const ThemedCheckbox = ({ children, onChange, checked = false, configCheckbox }: Props) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <Checkbox
        {...configCheckbox}
        value={checked}
        onValueChange={(e) => {
          onChange && onChange(e)
        }}
      />
      {children}
    </View>
  )
}

export default ThemedCheckbox
