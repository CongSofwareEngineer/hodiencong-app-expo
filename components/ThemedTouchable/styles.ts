import { StyleSheet } from 'react-native'

import { COLORS } from '@/constants/Colors'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    padding: 8,
  },
  containerChildren: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  default: {
    backgroundColor: COLORS.green,
  },
  primary: {
    backgroundColor: COLORS.yellow,
  },
  danger: {
    backgroundColor: COLORS.red,
  },
  warning: {
    backgroundColor: COLORS.yellow,
  },
})
