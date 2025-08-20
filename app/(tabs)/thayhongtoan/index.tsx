import { Link } from 'expo-router'
import React from 'react'

import ThemedScrollView from '@/components/ui/ThemedScrollView'
import ThemedText from '@/components/ui/ThemedText'
import SafeAreaView from '@/components/SafeAreaView'

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
