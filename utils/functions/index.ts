import { Platform } from 'react-native'

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
