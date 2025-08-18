import { Controller } from 'react-hook-form'
import { View } from 'react-native'

import { Colors } from '@/constants/Colors'

import ThemedInput, { ThemedInputProps } from '../ThemedInput'
import ThemedText, { ThemedTextProps } from '../ThemedText'

type Props = {
  configLabel?: ThemedTextProps
  configInput?: ThemedInputProps
  configError?: ThemedTextProps
  control: any
  showError?: boolean
  name: string
  required?: boolean
  errors?: any
  label?: string
}
const InputForm = ({ configInput, configError, label, errors, configLabel, control, name, showError = true, required = false }: Props) => {
  return (
    <View className='w-full'>
      <ThemedText {...configLabel}>{label}</ThemedText>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedInput {...configInput} onBlur={onBlur} onChangeText={(value) => onChange(value)} value={value} />
        )}
        name={name}
        rules={{ required: required }}
      />
      <ThemedText {...configError} style={[{ opacity: showError && errors ? 1 : 0, fontSize: 12, color: Colors.red }, configError?.style]}>
        {errors}
      </ThemedText>
    </View>
  )
}

export default InputForm
