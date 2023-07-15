import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { primaryColor } from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'

export const GetStarted = () => {
  const navigation = useNavigation()
  const goToLogin = () => navigation.navigate('Login')

  return <TouchableOpacity style={style.button} onPress={goToLogin}>
    <Text style={style.text}>
      Get Started
    </Text>
  </TouchableOpacity>
}

const style = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: '15%',
    width: '60%',
    height: (Dimensions.get('window').height * 5) / 100,
    borderRadius: 15,
    backgroundColor: primaryColor,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'sono',
    textAlign: 'center',
    fontSize: 18,
  }
})
