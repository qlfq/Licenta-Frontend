import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useHandleButton } from './hooks/use-handle-button'

type Props = {
  text: string,
  roomId: number,
  setText: (v: string) => null
}

export const Button = ({ text, roomId, setText }: Props) => <TouchableOpacity style={styles.button} onPress={useHandleButton(text, roomId, setText)}>
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
    fontSize: 28,
  }
})
