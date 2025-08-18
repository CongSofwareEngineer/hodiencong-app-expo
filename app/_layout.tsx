import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

import ClientRender from '@/components/ClientRender'
import ReactQueryProvider from '@/components/ReactQueryProvider'
import useMode from '@/hooks/useMode'
import usePreLoadData from '@/hooks/usePreLoadData'
import { hydrateZustand } from '@/zustand/hydrate'
import useLanguage from '@/hooks/useLanguage'
import { useThemeColor } from '@/hooks/useThemeColor'
import { MODE } from '@/constants/app'

export default function RootLayout() {
  usePreLoadData()
  const { mode: colorScheme } = useMode()
  const { hydrate } = hydrateZustand()
  const { translate } = useLanguage()
  const background = useThemeColor('background')

  console.log({ colorScheme, background })

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded || !hydrate) {
    // Async font loading only occurs in development.
    return null
  }

  return (
    <ReactQueryProvider>
      <ThemeProvider value={colorScheme === MODE.Dark ? DarkTheme : DefaultTheme}>
        <ClientRender>
          <Stack
            screenOptions={{
              contentStyle: {
                backgroundColor: background,
              },
            }}
            initialRouteName='login'
          >
            <Stack.Screen
              name='(tab-navigation)'
              options={{
                headerShown: false,
                // title: translate('common.back'),
                headerBackTitleStyle: {
                  fontSize: 8,
                },
                headerTitle: translate('common.back'),
                headerTitleStyle: {
                  fontSize: 8,
                },
                headerBackTitle: translate('common.back'),
              }}
            />
            <Stack.Screen name='+not-found' />
            <Stack.Screen name='login' options={{ title: translate('login.titlePage'), headerShown: false }} />
            <Stack.Screen name='tc-store' options={{ title: translate('production.titlePage') }} />
            <Stack.Screen
              name='tc-store/production'
              options={{
                title: translate('production.titlePage'),
              }}
            />
            <Stack.Screen
              name='thayhongtoan/list-register'
              options={{
                title: translate('production.titlePage'),
                // headerStyle: {
                //   backgroundColor: backgroundHeaderPage,
                // },
              }}
            />
            <Stack.Screen name='setting' options={{ title: translate('production.titlePage') }} />
          </Stack>
          <StatusBar style={colorScheme === MODE.Dark ? 'light' : 'dark'} />
        </ClientRender>
      </ThemeProvider>
    </ReactQueryProvider>
  )
}
