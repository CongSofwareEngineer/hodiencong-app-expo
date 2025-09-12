import { Dimensions, Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import ExtraDimensions from 'react-native-extra-dimensions-android'

export const SOFT_MENU_BAR_HEIGHT = Platform.OS === 'android' ? ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT') : 0
export const IS_NOTCH_ANDROID = Platform.OS === 'android' && DeviceInfo.hasNotch()
export const HAS_NOTCH = DeviceInfo.hasNotch()

export const HEIGHT_SCREEN = Dimensions.get('window').height
export const WIDTH_SCREEN = Dimensions.get('window').width
