import { Dimensions, Platform } from 'react-native'
// import * as NavigationBar from 'expo-navigation-bar';

export const HEIGHT_SCREEN = Dimensions.get('window').height
export const WIDTH_SCREEN = Dimensions.get('window').width
export const HAS_NOTCH = Platform.OS === 'ios'

// export const SOFT_MENU_BAR_HEIGHT = Platform.OS === 'android' ? NavigationBar.() : 0
