import React from 'react'
import { ParamListBase, StackNavigationState } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationEventMap, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { withLayoutContext } from 'expo-router'

import HomeScreen from '@/app/(tabs)/home'
import LoginScreen from '@/app/login'
import { useUser } from '@/hooks/useUser'
import ProductionScreen from '@/app/tc-store/production'
import useLanguage from '@/hooks/useLanguage'
import TcStoreScreen from '@/app/(tabs)/tc-store'
import ListRegisterScreen from '@/app/thayhongtoan/list-register'
import NotFoundScreen from '@/app/+not-found'
import TabNavigation from '@/app/(tabs)/_layout'

const { Navigator, Screen } = createNativeStackNavigator()

export const JsStack = withLayoutContext<
  NativeStackNavigationOptions,
  typeof Navigator,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationEventMap
>(Navigator)

const StackScreen = () => {
  const { isLogin } = useUser()
  const { translate } = useLanguage()

  return (
    <Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}
      initialRouteName={!isLogin ? 'login' : 'login'}
    >
      <Screen name='+not-found' component={NotFoundScreen} />
      <Screen name='home' component={HomeScreen} />
      <Screen
        name='login'
        options={{
          title: translate('login.titlePage'),
          headerTitleAlign: 'center',
          headerShown: false,
        }}
        component={LoginScreen}
      />
      <Screen name='tc-store' options={{ title: 'TC Store' }} component={TcStoreScreen} />
      <Screen name='tc-store/production' options={{ title: translate('production.titlePage') }} component={ProductionScreen} />
      <Screen name='thayhongtoan/list-register' options={{ title: translate('thayHongToan.listRegister') }} component={ListRegisterScreen} />
      <Screen name='(tabs)' options={{ headerShown: false }} component={TabNavigation} />
    </Navigator>
  )
}

export default StackScreen
