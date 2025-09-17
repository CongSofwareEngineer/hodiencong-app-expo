import Reactotron from 'reactotron-react-native'
import { Platform } from 'react-native'

// Try to determine the host automatically when running on device/simulator
const getHost = () => {
  // On Android emulator, 10.0.2.2 is host machine
  // On iOS simulator, localhost works
  // On real device, replace with your machine IP
  if (Platform.OS === 'android') return '10.0.2.2'

  return 'localhost'
}

export const setupReactotron = () => {
  if (__DEV__) {
    const tron = Reactotron.configure({ name: 'hodiencong-app-expo', host: getHost() }).useReactNative({ overlay: false }).connect()

    // Optional: clear on load
    tron.clear?.()

    // Assign to console for easy access
    ;(console as unknown as { tron?: typeof Reactotron }).tron = Reactotron
  }
}

export default Reactotron
