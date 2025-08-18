import { DarkTheme } from '@react-navigation/native'
import React, { ReactNode } from 'react'
import { DefaultTheme, PaperProvider as PaperConfig } from 'react-native-paper'

import useMode from '@/hooks/useMode'
import { MODE } from '@/constants/app'

const PaperProvider = ({ children }: { children: ReactNode }) => {
  const { mode } = useMode()

  return <PaperConfig theme={mode === MODE.Dark ? DarkTheme : DefaultTheme}>{children}</PaperConfig>
}

export default PaperProvider
