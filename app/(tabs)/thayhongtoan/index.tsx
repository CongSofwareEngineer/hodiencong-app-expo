import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedText from '@/components/ui/ThemedText'

const ThayHongToanScreen = () => {
  return (
    <ThemedScrollView>
      <SafeAreaView>
        <ThemedText>ThayHongToanScreen</ThemedText>
        <Link href={'/thayhongtoan/list-register'}>
          <ThemedText type='link'>list-register</ThemedText>
        </Link>
      </SafeAreaView>
    </ThemedScrollView>
  )
}

export default ThayHongToanScreen
