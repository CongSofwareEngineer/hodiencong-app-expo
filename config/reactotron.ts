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

// Helper to log structured data to Reactotron (dev only)
export const logData = (name: string, value: unknown, options?: { preview?: string; important?: boolean }) => {
  if (!__DEV__) return
  try {
    const preview = options?.preview ?? (typeof value === 'string' ? value : undefined)

    Reactotron.display?.({
      name,
      value,
      preview,
      important: options?.important ?? false,
    })
  } catch (e) {
    // Fallback to console in case Reactotron isn't available
    // eslint-disable-next-line no-console
    console.log(`[Reactotron logData:${name}]`, value)
  }
}

export default Reactotron
