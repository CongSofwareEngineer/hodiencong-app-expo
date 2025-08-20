import { Link } from 'expo-router'
import React from 'react'

import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedText from '@/components/ui/ThemedText'
import SafeAreaView from '@/components/SafeAreaView'

const TcStoreScreen = () => {
  return (
    <ThemedScrollView>
      <SafeAreaView>
        <ThemedText>TcStoreScreen</ThemedText>
        <Link href={'/tc-store/production'}>
          <ThemedText type='link'>Product</ThemedText>
        </Link>
      </SafeAreaView>
    </ThemedScrollView>
  )
}

export default TcStoreScreen
