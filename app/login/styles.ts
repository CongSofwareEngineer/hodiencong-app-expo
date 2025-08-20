import { StyleSheet } from 'react-native'

import { COLORS } from '@/constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerSafeArea: {
    alignItems: 'center',
    gap: 20,
  },
  containerForm: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray,
    width: '100%',
    height: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
  },
  btnLogin: {
    width: '100%',
    marginTop: 10,
  },
  logoContainer: {
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 20,
    overflow: 'hidden',
    width: '25%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.green,
  },
})

export default styles
