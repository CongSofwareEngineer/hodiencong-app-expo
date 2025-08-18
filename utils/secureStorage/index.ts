import { KEY_CHAIN } from '@/constants/keyChain';
import * as SecureStore from 'expo-secure-store';
export const checkSupportSecure = async () => {
  try {

    return SecureStore.canUseBiometricAuthentication()
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
    const password = JSON.stringify(value)

    await SecureStore.setItemAsync(key, password, {
      keychainService: service,
      keychainAccessible: SecureStore.WHEN_UNLOCKED,
      authenticationPrompt: title
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
    const creds = await SecureStore.getItemAsync(key, {
      keychainService: service,
      keychainAccessible: SecureStore.WHEN_UNLOCKED,
      authenticationPrompt: title
    })


    return creds
  } catch {
    return defaultData
  }
}

export const removeSecureData = async (key: KEY_CHAIN) => {
  try {
    const service = `${key}_service`

    await SecureStore.deleteItemAsync(key, {
      keychainService: service,
    })

    return true
  } catch {
    return false
  }
}