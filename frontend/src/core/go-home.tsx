import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { darkColor } from '../constants/colors'
import { useNavigation } from '@react-navigation/native'

export const GoHome = () => {
  const navigation = useNavigation()
  const goHome = () => navigation.navigate('Home')

  return <TouchableOpacity style={styles.button} onPress={goHome}>
    <FontAwesome5 style={styles.icon} name={'angle-left'}/>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: darkColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 15,
    left: 15,
  },
  icon: {
    fontSize: 36,
  }
})
