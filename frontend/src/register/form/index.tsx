import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Field } from './field'
import { Continue } from './continue'
import { Error } from './error'

export const Form = () => <View style={styles.container}>
  <Field placeholder={"Username"} value={'username'} />
  <Field placeholder={"Email"} value={'email'} />
  <Field placeholder={"Password"} value={'password'} secureTextEntry />
  <Continue />
  <Error />
</View>

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 'auto',

  }
})
