import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

type Props = {
  text: string,
  setText: (e: string) => void
}

export const Input = ({ text, setText }: Props) => (
  <TextInput
    style={styles.input}
    value={text}
    onChange={(event: any) => setText(event.target.value)}
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

