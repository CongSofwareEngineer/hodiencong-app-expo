import { Redirect } from 'expo-router'
import React from 'react'

import { useUser } from '@/hooks/useUser'

const CheckRoutePage = () => {
  const { isLogin } = useUser()

  if (!isLogin) {
    return <Redirect href='/home' />
  }

  return <Redirect href='/login' />
}

export default CheckRoutePage
