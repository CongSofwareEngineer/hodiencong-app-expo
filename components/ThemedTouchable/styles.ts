import { StyleSheet } from 'react-native'

import { Colors } from '@/constants/Colors'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    padding: 8,
  },
  containerChildren: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  default: {
    backgroundColor: Colors.green,
  },
  primary: {
    backgroundColor: Colors.yellow,
  },
  danger: {
    backgroundColor: Colors.red,
  },
  warning: {
    backgroundColor: Colors.yellow,
  },
})
