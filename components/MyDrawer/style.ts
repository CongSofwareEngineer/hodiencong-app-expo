import { StyleSheet } from 'react-native'

import { width } from '@/utils/Systems'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  topLine: {
    width: width(20),
    height: 10,
    backgroundColor: 'black',
    margin: 'auto',
    borderRadius: 10,
  },
})

export default styles
