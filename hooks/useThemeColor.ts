import { ColorThemes } from '@/constants/Colors'

import useMode from './useMode'

export function useThemeColor(colorName: keyof typeof ColorThemes.light & keyof typeof ColorThemes.dark, props?: { light?: string; dark?: string }) {
  const { mode: theme } = useMode()

  if (props?.[theme]) {
    return props?.[theme]
  } else {
    return ColorThemes[theme][colorName]
  }
}
