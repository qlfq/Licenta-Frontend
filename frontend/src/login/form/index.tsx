import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Field } from './field'
import { Continue } from './continue'
import { Register } from './register'
import { Line } from './line'
import { Error } from './error'

export const Form = () => <View style={styles.container}>
  <Field placeholder={"Username"} value={'username'} />
  <Field placeholder={"Password"} value={'password'} secureTextEntry />
  <Error />
  <Continue />
  <Line />
  <Register />
</View>

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 'auto',
  }
})
