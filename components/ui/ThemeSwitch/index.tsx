import { Switch } from 'react-native'
import React from 'react'

type Props = {
  onChange: (value: boolean) => void
} & React.PropsWithChildren<any>
const ThemeSwitch = ({ onChange, ...props }: Props) => {
  return (
    <Switch
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={props?.value ? '#f1e17e' : '#f4f3f4'}
      ios_backgroundColor='#3e3e3e'
      onValueChange={onChange}
      value={props.value}
    />
  )
}

export default ThemeSwitch
