import AntDesign from '@expo/vector-icons/AntDesign'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

type Props = {
  loading?: boolean
  typeBtn?: 'default' | 'primary' | 'danger' | 'warning'
} & TouchableOpacityProps

const ThemedTouchable = ({ loading, typeBtn = 'default', style, ...props }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      {...props}
      activeOpacity={0.8}
      disabled={loading || props?.disabled}
      // className={cn(
      //   typeBtn === 'default' && 'bg-green-500 ',
      //   typeBtn === 'primary' && 'bg-yellow-500 ',
      //   typeBtn === 'danger' && 'bg-red-500 ',
      //   typeBtn === 'warning' && 'bg-orange-400 ',
      //   (loading || props?.disabled) && 'opacity-50'
      // )}
    >
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

const styles = StyleSheet.create({
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
    backgroundColor: '#000',
  },
})
