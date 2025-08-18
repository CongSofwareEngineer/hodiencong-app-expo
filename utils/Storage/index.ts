import { KEY_CHAIN } from '@/constants/keyChain'
import { MMKV } from 'react-native-mmkv'
import { checkSupportSecure, generateKey, getSecureData, saveSecureData } from '../secureStorage'



const create = async (isSecure = false) => {
  let encryptionKey = process.env.EXPO_PUBLIC_KEY_ENCODE_STORAGE

  if (isSecure) {
    const isSupport = await checkSupportSecure()

    if (isSupport) {
      encryptionKey = await getSecureData(KEY_CHAIN.keyEncrypt)
      if (!encryptionKey) {
        encryptionKey = generateKey()
        saveSecureData(KEY_CHAIN.keyEncrypt, encryptionKey)
      }
    }
  }
  const storage = new MMKV({ id: 'LOCAL_STORAGE', encryptionKey })

  return storage
}

export const getDataLocal = async (key: string, isSecure = false) => {
  try {
    const storage = await create(isSecure)
    const jsonValue = storage.getString(key) ?? ''

    return JSON.parse(jsonValue)
  } catch {
    return ''
  }
}

export const removeDataLocal = async (key: string, isSecure = false) => {
  try {
    const storage = await create(isSecure)

    storage.delete(key)

    return true
  } catch {
    return false
  }
}

export const saveDataLocal = async (key: string, value: any, isSecure = false) => {
  try {
    const storage = await create(isSecure)

    storage.set(key, JSON.stringify(value))

    return true
  } catch {
    return false
  }
}