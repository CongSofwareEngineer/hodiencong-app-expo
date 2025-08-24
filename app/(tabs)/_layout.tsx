import React from 'react'
import { Platform, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { useThemeColor } from '@/hooks/useThemeColor'
import { ColorThemes } from '@/constants/Colors'
import { HapticTab } from '@/components/HapticTab'
import TabBarBackground from '@/components/ui/TabBarBackground'
import useMode from '@/hooks/useMode'

import HomeScreen from './home'
import TcStoreScreen from './tc-store'
import ThayHongToanScreen from './thayhongtoan'
import SettingScreen from './setting'
import ThemedTouchable from '@/components/ThemedTouchable'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  const { mode } = useMode()
  const background = useThemeColor('background')
  return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        animation: 'fade',
        tabBarActiveTintColor: ColorThemes[mode].tint,
        headerShown: false,
        
        tabBarButton: HapticTab,

        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          ...Platform.select({
            ios: {

              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            android: {
              // position:'absolute'
            },
            default: {

            },

          }),
          height: '8%',
          minHeight: 60,
          maxHeight:120,
          
           
        },
        sceneStyle: {
          backgroundColor: background,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarBadge: 3,
          tabBarItemStyle:{
            // display:'flex',
            // justifyContent:'center',
            // alignItems:'center',
          },
          
          // tabBarButton: e=>{
          //   return (
          //     <View
              
          //     >
          //       {<ThemedTouchable
          //         onPress={(ev)=>{
          //           e.onPress?.(ev)
          //         }}
          //       >
          //         <AntDesign name='home' size={24} color='yellow' />

          //       </ThemedTouchable>}
          //     </View>
          //   )
          // },  
         
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
