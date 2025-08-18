import { ScrollView, ScrollViewProps } from 'react-native'

import { useThemeColor } from '@/hooks/useThemeColor'

const ThemedScrollView = ({ children, style, ...props }: ScrollViewProps) => {
  const background = useThemeColor('background')

  console.log({ ThemedScrollView: background })

  return (
    <ScrollView style={[{ padding: 20, backgroundColor: background }, style]} {...props}>
      {children}
    </ScrollView>
  )
}

export default ThemedScrollView
