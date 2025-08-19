import React, { ReactNode } from 'react'
import { SafeAreaView as SafeAreaViewPackage, SafeAreaViewProps } from 'react-native-safe-area-context'

import { styles } from '@/styles/app'

interface Props extends SafeAreaViewProps {
  children: ReactNode
}

const SafeAreaView = ({ children, ...props }: Props) => {
  return (
    <SafeAreaViewPackage {...props} style={[styles.safeArea, props?.style]}>
      {children}
    </SafeAreaViewPackage>
  )
}

export default SafeAreaView
