import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type Props = {
  message: string,
  setMessage: (e: string) => void
}

export const Input = ({ message, setMessage }: Props) => (
  <TextInput
    style={styles.input}
    value={message}
    onChange={(event) => setMessage(event.target?.value)}
    placeholder={'Write a message...'}
    />
)

const styles = StyleSheet.create<any>({
  input: {
    width: '80%',
    height: 50,
    fontFamily: 'sono',
    fontSize: 18,
  }
})

