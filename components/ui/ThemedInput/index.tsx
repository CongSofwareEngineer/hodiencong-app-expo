import { ReactNode, useState } from 'react'
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'

import { ThemedText } from '@/components/ui/ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'

import { styles } from './styles'

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
  const colorPlaceholder = useThemeColor('textPlaceholder', { light: lightColor, dark: darkColor })
  const backgroundInput = useThemeColor('backgroundInput', { light: lightColor, dark: darkColor })

  const [isPassword, setIsPassword] = useState(props?.secureTextEntry)

  return (
    <View style={[styles.container]}>
      {label && <ThemedText style={styles.label}>{label}</ThemedText>}
      <View style={[styles.containerSub, { backgroundColor: backgroundInput }]}>
        {leftIcon && (
          <TouchableOpacity style={styles.leftIcon} onPress={() => onPressLeftIcon?.()}>
            <ThemedText>{leftIcon}</ThemedText>
          </TouchableOpacity>
        )}
        <TextInput
          placeholderTextColor={colorPlaceholder}
          style={[{ color, fontSize: 16, flex: 1, paddingLeft: 0 }, style]}
          {...props}
          secureTextEntry={isPassword}
        />

        {rightIcon && (
          <TouchableOpacity
            style={styles.rightIcon}
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

      {showCount && props?.maxLength && (
        <ThemedText {...props?.countConfig} style={[styles.count, { width: '100%', textAlign: 'right' }]} className={props?.countConfig?.className}>
          {props?.value?.length ?? 0}
          {props?.maxLength && `/${props?.maxLength}`}
        </ThemedText>
      )}
    </View>
  )
}

export default ThemedInput
