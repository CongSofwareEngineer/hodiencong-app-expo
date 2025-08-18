import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import ClientRender from '@/components/ClientRender';
import PreLoadData from '@/components/PreLoadData';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { KEY_STORAGE } from '@/constants/storage';
import { useColorScheme } from '@/hooks/useColorScheme';
import { saveDataLocal } from '@/utils/Storage';
import { useEffect } from 'react';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  useEffect(() => {
    saveDataLocal(KEY_STORAGE.Language, 'en')


  }, [])


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
