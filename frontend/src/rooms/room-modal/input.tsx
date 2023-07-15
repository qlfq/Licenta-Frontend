import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { darkColor } from '../../constants/colors'
import { useContext } from '../context'

interface Props {
  placeholder: string,
  value: string,
}

export const Input = ({ placeholder, value }: Props) => {
  const { handleChange, handleBlur, values, errors } = useContext()

  return <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChange={handleChange(value)}
      onBlur={handleBlur(value)}
      value={values[value]}
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
    width: 250,
    height: 70,
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: darkColor,
    fontFamily: 'sono',
    fontSize: 16,
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
