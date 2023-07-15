import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Text } from 'react-native'

export const Error = () => {
  const error = useSelector(({ login }) => login.error)

  return error && <Text style={style.text}>
    Username or password are wrong...
  </Text>
}

const style = StyleSheet.create<any>({
  text: {
    fontFamily: 'sono',
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
    marginTop: 25,
  }
})
