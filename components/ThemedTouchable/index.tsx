import AntDesign from '@expo/vector-icons/AntDesign'
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import { styles } from './styles'

type Props = {
  loading?: boolean
  typeBtn?: 'default' | 'primary' | 'danger' | 'warning'
} & TouchableOpacityProps

const ThemedTouchable = ({ loading, typeBtn = 'default', style, ...props }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, styles[typeBtn], style]} {...props} activeOpacity={0.8} disabled={loading || props?.disabled}>
      {
        <View style={styles.containerChildren}>
          {loading && <AntDesign name='loading2' size={20} className='animate-spin' />}
          <Text style={{ opacity: loading ? 0 : 1 }}>{props.children}</Text>
        </View>
      }
    </TouchableOpacity>
  )
}

export default ThemedTouchable
