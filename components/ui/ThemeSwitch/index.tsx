import { Switch } from 'react-native'
import React from 'react'

const ThemeSwitch = () => {
  const [isEnabled, setIsEnabled] = React.useState(false)

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <Switch
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnabled ? '#f1e17e' : '#f4f3f4'}
      ios_backgroundColor='#3e3e3e'
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

export default ThemeSwitch
