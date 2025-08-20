/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4'
const tintColorDark = '#fff'

export enum COLORS {
  red = 'red',
  green = 'green',
  blue = 'blue',
  yellow = 'yellow',
}

export const ColorThemes = {
  light: {
    text: '#11181C',
    textPlaceholder: '#292d2fff',
    background: '#ECEDEE',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    backgroundModal: '#000000cc',
    backgroundContentModal: '#d1d5db',
    backgroundHeaderPage: '#d1d5db',
    backgroundInput: '#d1d5db',
  },
  dark: {
    text: '#ECEDEE',
    textPlaceholder: '#6a6666ff',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    backgroundModal: '#000000cc',
    backgroundContentModal: '#1f2937',
    backgroundHeaderPage: '#d1d5db',
    backgroundInput: '#303132ff',
  },
}
