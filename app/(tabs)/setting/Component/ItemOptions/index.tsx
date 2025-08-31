import { View, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

import useMode from '@/hooks/useMode'
import { MODE } from '@/constants/app'
import { COLORS } from '@/constants/Colors'
import ThemedText from '@/components/ui/ThemedText'

interface Props {
  icon: ReactNode
  text?: ReactNode
  rightIcon?: ReactNode
  noLineBottom?: boolean
}
const ItemOptions = ({ text, icon, rightIcon, noLineBottom = false }: Props) => {
  const { mode } = useMode()

  return (
    <View style={[styles.container, styles[`container${mode}`], { borderBottomWidth: noLineBottom ? 0 : 1 }]}>
      <View style={styles.left}>
        {icon}
        <ThemedText>{text}</ThemedText>
      </View>
      {rightIcon}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },
  [`container${MODE.Light}`]: {
    borderBottomColor: COLORS.gray,
  },

  [`container${MODE.Dark}`]: {
    borderBottomColor: COLORS.gray,
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
})

export default ItemOptions
