import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useHandleButton } from './hooks/use-handle-button'

type Props = {
  message: string,
  setMessage: (v: string) => null
}

export const Button = ({message, setMessage}: Props) => <TouchableOpacity style={styles.button} onPress={useHandleButton(message, setMessage)}>
  <FontAwesome5 name={'paper-plane'} style={styles.icon} />
</TouchableOpacity>

const styles = StyleSheet.create<any>({
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25.6,
  }
})
