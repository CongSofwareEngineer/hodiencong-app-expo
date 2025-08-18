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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 0,
        width: '100%',
      }}
    >
      {label && <ThemedText style={{ width: '100%' }}>{label}</ThemedText>}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 0,
        }}
      >
        {leftIcon && (
          <TouchableOpacity style={{ marginRight: 5 }} onPress={() => onPressLeftIcon?.()}>
            <ThemedText>{leftIcon}</ThemedText>
          </TouchableOpacity>
        )}
        <TextInput style={[{ color, fontSize: 16, flex: 1, paddingLeft: 0 }, style]} {...props} secureTextEntry={isPassword} />

        {rightIcon && (
          <TouchableOpacity
            style={{ marginLeft: 5 }}
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
      {/* <View
        style={{
          width: '100%',
          gap: 8,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
      
        {showCount && (
          <ThemedText {...props?.countConfig} className={props?.countConfig?.className}>
            {props?.value?.length ?? 0}
            {props?.maxLength && `/${props?.maxLength}`}
          </ThemedText>
        )}
      </View> */}

      {showCount && props?.maxLength && (
        <ThemedText {...props?.countConfig} style={[{ width: '100%', textAlign: 'right' }]} className={props?.countConfig?.className}>
          {props?.value?.length ?? 0}
          {props?.maxLength && `/${props?.maxLength}`}
        </ThemedText>
      )}
    </View>
  )
}

export default ThemedInput
