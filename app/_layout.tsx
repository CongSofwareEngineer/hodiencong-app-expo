import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import ClientRender from '@/components/ClientRender';
import PreLoadData from '@/components/PreLoadData';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import useMode from '@/hooks/useMode';

export default function RootLayout() {
  const { mode: colorScheme } = useMode();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }




  return (
    <ReactQueryProvider >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PreLoadData >
          <ClientRender >
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </ClientRender>
        </PreLoadData>


      </ThemeProvider>
    </ReactQueryProvider>

  );
}
