import { Tabs } from 'expo-router'
import React from 'react'
import { Platform, useColorScheme } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { ColorThemes } from '@/constants/Colors'
import useLanguage from '@/hooks/useLanguage'
import { useThemeColor } from '@/hooks/useThemeColor'
const TabNavigation = () => {
  const colorScheme = useColorScheme()
  const { translate } = useLanguage()
  const background = useThemeColor('background')

  return (
    <Tabs
      //   initialRouteName='home/index'
      screenOptions={{
        tabBarActiveTintColor: ColorThemes[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,

        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
        sceneStyle: {
          backgroundColor: background,
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name='house.fill' color={color} />,
        }}
      />

      <Tabs.Screen
        name='thayhongtoan'
        options={{
          title: 'Thayhongtoan',
          tabBarIcon: ({ color }) => <FontAwesome5 name='restroom' size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name='tc-store'
        options={{
          title: 'TC Store',
          tabBarIcon: ({ color }) => <Entypo name='shop' size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name='setting'
        options={{
          title: translate('setting.titlePage'),
          headerTitle: translate('setting.titlePage'),
          headerShown: true,
          // tabBarIcon: ({ color }) => <IconSymbol size={24} name='figure.strengthtraining.traditional.circle' color={color} />,
          tabBarIcon: ({ color }) => <AntDesign name='setting' size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabNavigation
