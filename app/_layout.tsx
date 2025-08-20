import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import ClientRender from '@/components/ClientRender'
import ReactQueryProvider from '@/components/ReactQueryProvider'
import useMode from '@/hooks/useMode'
import usePreLoadData from '@/hooks/usePreLoadData'
import { hydrateZustand } from '@/zustand/hydrate'
import { MODE } from '@/constants/app'
import StackScreen from '@/components/StackScreen'

export default function RootLayout() {
  usePreLoadData()
  const { mode: colorScheme } = useMode()
  const { hydrate } = hydrateZustand()

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  console.log({ hydrate, loaded })

  if (!loaded || !hydrate) {
    return null
  }

  return (
    <ReactQueryProvider>
      <ThemeProvider value={colorScheme === MODE.Dark ? DarkTheme : DefaultTheme}>
        <ClientRender>
          <StackScreen />
          <StatusBar style={colorScheme === MODE.Dark ? 'light' : 'dark'} />
        </ClientRender>
      </ThemeProvider>
    </ReactQueryProvider>
  )
}
