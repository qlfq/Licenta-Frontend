import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { darkColor, primaryColor } from '../../constants/colors'
import { useContext } from '../context'

interface Props {
  placeholder: string,
  secureTextEntry: boolean,
  value: string,
}

export const Input = ({placeholder, value, secureTextEntry}: Props) => {
  const { handleChange, handleBlur } = useContext()

  return <View style={style.container}>
    <TextInput
      style={style.input}
      placeholder={placeholder}
      onChange={handleChange(value)}
      onBlur={handleBlur(value)}
      textContentType="emailAddress"
      secureTextEntry={secureTextEntry}
    />
  </View>
}

const style = StyleSheet.create<any>({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    height: 45,
    borderRadius: 15,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: darkColor,
    fontFamily: 'sono',
    fontSize: 18,
    paddingLeft: 15,
  },
  error: {
    fontFamily: 'sono',
    textAlign: 'center',
    color: 'red',
    fontSize: 14,
    marginTop: 2,
  }
})
