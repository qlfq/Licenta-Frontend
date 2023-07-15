import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { primaryColor } from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { actions } from '../slices/login'

export const Register = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const goToRegister = () => {
    dispatch(actions.reset())
    navigation.navigate('Register')
  }

  return <TouchableOpacity style={style.button} onPress={goToRegister}>
    <Text>
      Register
    </Text>
    <FontAwesome5 name={'chevron-right'} style={style.icon} />
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
  },
  icon: {
    fontSize: 18,
    position: 'absolute',
    right: 15,
  }
})
