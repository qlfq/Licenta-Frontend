import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { primaryColor } from '../constants/colors'
import { useLogout } from './hooks/use-logout'

export const Logout = () => <TouchableOpacity style={styles.button} onPress={useLogout()}>
  <Text style={styles.text}>
    LOGOUT
  </Text>
</TouchableOpacity>

const styles = StyleSheet.create<any>({
  button: {
    width: '80%',
    height: 56,
    backgroundColor: primaryColor,
    opacity: '1',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    transition: '1s',
    position: 'absolute',
    bottom: 20,
  },
  text: {
    fontFamily: 'sono',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  }
})
