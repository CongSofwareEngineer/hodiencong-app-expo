import { Image } from 'expo-image';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MODE } from '@/constants/app';
import { KEY_CHAIN } from '@/constants/keyChain';
import useModal from '@/hooks/useModal';
import useMode from '@/hooks/useMode';
import { saveSecureData } from '@/utils/secureStorage';

export default function HomeScreen() {
  const { mode, setMode } = useMode()
  const { openModal, closeModal } = useModal()
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome! cong</ThemedText>
        <HelloWave />
      </ThemedView>
      <TouchableOpacity
        onPress={() => {
          setMode(mode === MODE.Light ? MODE.Dark : MODE.Light)
        }}
      >
        <ThemedText type="title">
          {mode === MODE.Light ? 'Light' : 'Dark'}
        </ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          saveSecureData(KEY_CHAIN.Token, 'token')
        }}
      >
        <ThemedText type="title">
          save secure
        </ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          openModal({
            content: (
              <View>
                <ThemedText type="title">
                  Open modal
                </ThemedText>
                <TouchableOpacity
                  onPress={closeModal}
                >
                  <ThemedText type="title">
                    Close modal
                  </ThemedText>
                </TouchableOpacity>


              </View>

            )
          })
        }}
      >
        <ThemedText type="title">
          Open modal
        </ThemedText>
      </TouchableOpacity>


      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
