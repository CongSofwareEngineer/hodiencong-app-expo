import { ReactNode, useState } from 'react'
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'

export type ThemedInputProps = {
  lightColor?: string
  darkColor?: string
  label?: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onPressRightIcon?: () => any
  onPressLeftIcon?: () => any
  showCount?: boolean
  countConfig?: TextInputProps
} & TextInputProps

const ThemedInput = ({
  showCount,
  onPressRightIcon,
  onPressLeftIcon,
  style,
  label,
  rightIcon,
  leftIcon,
  lightColor,
  darkColor,
  ...props
}: ThemedInputProps) => {
  const color = useThemeColor('text', { light: lightColor, dark: darkColor })

  const [isPassword, setIsPassword] = useState(props?.secureTextEntry)

  return (
    <View
      style={{
        width: '100%',
        gap: 8,
      }}
    >
      {label && <ThemedText>{label}</ThemedText>}
      <View
        style={{
          width: '100%',
          gap: 8,
        }}
      >
        <View
          className=' border-b-[1px] border-gray-700'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 0,
          }}
        >
          {leftIcon && (
            <TouchableOpacity onPress={() => onPressLeftIcon?.()}>
              <ThemedText>{leftIcon}</ThemedText>
            </TouchableOpacity>
          )}
          <TextInput style={[{ color, fontSize: 16 }, style]} {...props} secureTextEntry={isPassword} />

          {rightIcon && (
            <TouchableOpacity
              onPress={() => {
                if (props?.secureTextEntry) {
                  setIsPassword((value) => !value)
                }
                onPressRightIcon?.()
              }}
            >
              <ThemedText>{rightIcon}</ThemedText>
            </TouchableOpacity>
          )}
        </View>
        {showCount && (
          <ThemedText {...props?.countConfig} className={props?.countConfig?.className}>
            {props?.value?.length ?? 0}
            {props?.maxLength && `/${props?.maxLength}`}
          </ThemedText>
        )}
      </View>
    </View>
  )
}

export default ThemedInput
