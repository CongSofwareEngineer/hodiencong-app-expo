import { KEY_CHAIN } from '@/constants/keyChain'
import * as Keychain from 'react-native-keychain'

export const checkSupportSecure = async () => {
  try {
    const biometryType = await Keychain.getSupportedBiometryType()

    if (!biometryType) {
      return false
    }

    await Keychain.setGenericPassword('test_user', 'test_password', {
      service: 'test_service',
      securityLevel: Keychain.SECURITY_LEVEL.SECURE_HARDWARE, // yêu cầu biometry
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET, // yêu cầu biometry
      authenticationPrompt: {
        title: 'Xác thực bảo mật',
      },
    })
    await Keychain.resetGenericPassword({
      service: 'test_service',
    })

    return true
  } catch {
    return false
  }
}

export const generateKey = () => {
  // byteLength = số byte random, 32 byte ~ 256-bit
  const randomBytes = new Uint8Array(32)

  crypto.getRandomValues(randomBytes)

  // Chuyển Uint8Array -> chuỗi Base64
  let binary = ''

  for (let i = 0; i < randomBytes.length; i++) {
    binary += String.fromCharCode(randomBytes[i])
  }

  return btoa(binary).replace(/\+-/g, '@').replace(/\//g, '@')
}

export const saveSecureData = async (key: KEY_CHAIN, value: any) => {
  try {
    const service = `${key}_service`
    const title = `Auth require ${key}`
    const userName = `${key}_userName`
    const password = JSON.stringify(value)

    await Keychain.setGenericPassword(userName, password, {
      service,
      securityLevel: Keychain.SECURITY_LEVEL.SECURE_HARDWARE,
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      authenticationPrompt: {
        title,
      },
    })

    return true
  } catch {
    return false
  }
}

export const getSecureData = async (key: KEY_CHAIN, defaultData: any = null) => {
  try {
    const service = `${key}_service`
    const title = `Auth require ${key}`
    const creds = await Keychain.getGenericPassword({
      service,
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      authenticationPrompt: {
        title,
      },
    })

    if (creds && creds.password) {
      return creds.password
    }

    return defaultData
  } catch {
    return defaultData
  }
}

export const removeSecureData = async (key: KEY_CHAIN) => {
  try {
    const service = `${key}_service`

    await Keychain.resetGenericPassword({ service })

    return true
  } catch {
    return false
  }
}