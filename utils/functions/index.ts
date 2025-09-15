import { Platform } from 'react-native'
import * as Clipboard from 'expo-clipboard'

export const isAndroid = () => {
  return Platform.OS === 'android'
}

export const isIos = () => {
  return Platform.OS === 'ios'
}

export const numberWithCommas = (vale: string | number) => {
  return vale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const ellipsis = (value: string, pre: number, post: number) => {
  return value.substring(0, pre) + '...' + value.substring(value.length - post)
}

export const sleep = async (time = 500) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

export const copyToClipboard = async (text: any, type: 'text' | 'url' | 'image') => {
  switch (type) {
    case 'url':
      await Clipboard.setUrlAsync(text)
      break
    case 'image':
      await Clipboard.setImageAsync(text)
      break
    default:
      await Clipboard.setStringAsync(text)
  }
}

export const pastToClipboard = async (value: any, type: 'text' | 'url' | 'image') => {
  switch (type) {
    case 'url':
      return Clipboard.setUrlAsync(value)
    case 'image':
      return Clipboard.setImageAsync(value)
    default:
      return Clipboard.setStringAsync(value)
  }
}
