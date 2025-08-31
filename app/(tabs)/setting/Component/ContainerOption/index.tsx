import { View, StyleSheet } from 'react-native'
import { ReactNode } from 'react'

import useMode from '@/hooks/useMode'
import { MODE } from '@/constants/app'
import { COLORS } from '@/constants/Colors'
import ThemedText from '@/components/ui/ThemedText'

const ContainerOption = ({ children, title }: { children: ReactNode; title: ReactNode }) => {
  const { mode } = useMode()

  return (
    <View style={styles.container}>
      <ThemedText>{title}</ThemedText>
      <View style={[styles.containerOption, styles[`containerOption${mode}`]]}>{children}</View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
  },
  containerOption: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
  },
  [`containerOption${MODE.Light}`]: {
    borderColor: COLORS.gray,
  },
  [`containerOption${MODE.Dark}`]: {
    borderColor: COLORS.gray,
  },
})

export default ContainerOption
