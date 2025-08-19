import { ScrollView, ScrollViewProps } from 'react-native'

import { useThemeColor } from '@/hooks/useThemeColor'

const ThemedScrollView = ({ children, style, ...props }: ScrollViewProps) => {
  const background = useThemeColor('background')

  return (
    <ScrollView style={[{ backgroundColor: background }, style]} {...props}>
      {children}
    </ScrollView>
  )
}

export default ThemedScrollView
