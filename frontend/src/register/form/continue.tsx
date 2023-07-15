import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { primaryColor } from '../../constants/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { useContext } from '../context'

export const Continue = () => {
  const { handleSubmit } = useContext()

  return <TouchableOpacity style={style.button} onPress={handleSubmit}>
    <Text>
      Continue
    </Text>
    <FontAwesome5 name={'chevron-right'} style={style.icon}/>
  </TouchableOpacity>
}

const style = StyleSheet.create({
  button: {
    width: '80%',
    height: 45,
    backgroundColor: primaryColor,
    fontFamily: 'sono',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    borderRadius: 15,
    marginTop: 30,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 18,
    position: 'absolute',
    right: 15,
  }
})
