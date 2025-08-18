import { KEY_CHAIN } from '@/constants/keyChain';
import * as SecureStore from 'expo-secure-store';
import { MMKV } from 'react-native-mmkv';
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


const create = async () => {
  let encryptionKey: string | null = process.env.EXPO_PUBLIC_KEY_ENCODE_STORAGE
  const isSupport = await checkSupportSecure()
  console.log({ isSupport });

  if (isSupport) {
    encryptionKey = await SecureStore.getItemAsync(KEY_CHAIN.keyEncrypt, {
      keychainAccessible: SecureStore.WHEN_UNLOCKED,
      authenticationPrompt: `Auth require ${KEY_CHAIN.keyEncrypt}`
    })

    if (!encryptionKey) {
      encryptionKey = generateKey()
      SecureStore.setItemAsync(KEY_CHAIN.keyEncrypt, encryptionKey, {
        keychainAccessible: SecureStore.WHEN_UNLOCKED,
        authenticationPrompt: `Auth require ${KEY_CHAIN.keyEncrypt}`
      })
    }
  }
  console.log({ encryptionKey });

  const storage = new MMKV({ id: 'SECURE_LOCAL_STORAGE', encryptionKey })

  return storage
}

export const saveSecureData = async (key: KEY_CHAIN, value: any) => {
  try {
    const storage = await create()

    storage.set(key, JSON.stringify(value))
  } catch {
    return false
  }
}

export const getSecureData = async (key: KEY_CHAIN, defaultData: any = null) => {
  try {
    const storage = await create()
    const jsonValue = storage.getString(key) ?? ''

    return JSON.parse(jsonValue)
  } catch {
    return defaultData
  }
}

export const removeSecureData = async (key: KEY_CHAIN) => {
  try {
    const storage = await create()

    storage.delete(key)

    return true
  } catch {
    return false
  }
}
