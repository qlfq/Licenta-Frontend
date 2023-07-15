import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Text } from 'react-native'
import { useContext } from '../context'

export const Error = () => {
  const error = useSelector(({ register }) => register.error)

  return error && <Text style={style.text}>
    Email or Username already used...
  </Text>
}

const style = StyleSheet.create({
  text: {
    fontFamily: 'sono',
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
    marginTop: 25,
  }
})
