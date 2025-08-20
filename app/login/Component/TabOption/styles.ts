import { StyleSheet } from 'react-native'

import { MODE } from '@/constants/app'
import { COLORS } from '@/constants/Colors'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 3,
    borderRadius: 20,
    width: '100%',
  },
  [`container${MODE.Light}`]: {
    backgroundColor: COLORS.gray,
  },
  [`container${MODE.Dark}`]: {
    backgroundColor: COLORS.gray,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    height: 'auto',
    width: '50%',
  },
  [`btnActive${MODE.Light}`]: {
    backgroundColor: COLORS.white,
  },
  [`btnActive${MODE.Dark}`]: {
    backgroundColor: COLORS.white,
  },
})

export default styles
