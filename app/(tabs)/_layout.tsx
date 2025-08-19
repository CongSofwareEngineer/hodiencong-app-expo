import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import useLanguage from '@/hooks/useLanguage'
import { useThemeColor } from '@/hooks/useThemeColor'
import { ColorThemes } from '@/constants/Colors'
import { HapticTab } from '@/components/HapticTab'
import TabBarBackground from '@/components/ui/TabBarBackground'
import useMode from '@/hooks/useMode'

import HomeScreen from './home'
import TcStoreScreen from './tc-store'
import ThayHongToanScreen from './thayhongtoan'
import SettingScreen from './setting'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  const { mode } = useMode()
  const { translate } = useLanguage()
  const background = useThemeColor('background')

  return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        tabBarActiveTintColor: ColorThemes[mode].tint,
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
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <AntDesign name='home' size={24} color={color} />,
        }}
        name='home'
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Entypo name='shop' size={24} color={color} />,
        }}
        name='tc-store'
        component={TcStoreScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name='restroom' size={24} color={color} />,
        }}
        name='thayhongtoan'
        component={ThayHongToanScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <AntDesign name='setting' size={24} color={color} />,
        }}
        name='setting'
        component={SettingScreen}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation
