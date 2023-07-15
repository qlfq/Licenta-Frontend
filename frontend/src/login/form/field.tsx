import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from './input'

interface Props {
  placeholder: string,
  secureTextEntry?: boolean,
  value: string,
}

export const Field = ({ placeholder, value, secureTextEntry = false }: Props) => <View style={styles.field}>
  <Text style={styles.text}>
    Your {placeholder}
  </Text>
  <Input placeholder={placeholder} value={value} secureTextEntry={secureTextEntry} />
</View>

const styles = StyleSheet.create({
  field: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  text: {
    fontFamily: 'sono',
    fontSize: 18,
    marginBottom: 5,
  }
})
