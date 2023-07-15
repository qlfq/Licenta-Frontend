import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { primaryColor } from '../../constants/colors'
import { useContext } from '../context'
import { isObjEmpty } from '../../helpers/is-obj-empty'

export const Create = () => {
  const { errors, handleSubmit } = useContext()

  return <TouchableOpacity style={styles(isObjEmpty(errors)).button} onPress={handleSubmit} disabled={!isObjEmpty(errors)}>
    <Text style={styles().text}>
      Create
    </Text>
  </TouchableOpacity>
}

const styles = (isActive?: boolean) => StyleSheet.create<any>({
  button: {
    width: '60%',
    height: 40,
    backgroundColor: `${isActive ? primaryColor : 'gray'}`,
    borderRadius: 5,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'sono',
    fontSize: 16,
    textAlign: 'center',
  }
})
