import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { darkColor, primaryColor } from '../../constants/colors'
import { useContext } from '../context'

interface Props {
  placeholder: string,
  secureTextEntry: boolean,
  value: string,
}

export const Input = ({ placeholder, value, secureTextEntry }: Props) => {
  const { handleChange, handleBlur, values, errors } = useContext()

  return <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChange={handleChange(value)}
      onBlur={handleBlur(value)}
      value={values[value]}
      secureTextEntry={secureTextEntry}
    />
    {
      errors[value] && (
        <Text style={styles.error}>
          {errors[value]}
        </Text>
      )
    }
  </View>
}

const styles = StyleSheet.create<any>({
  container: {
    width: '100%',
    height: 80,
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
    color: 'red',
    fontSize: 12,
    marginTop: 3,
  }
})
