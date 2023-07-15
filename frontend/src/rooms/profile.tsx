import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { primaryColor } from '../constants/colors'
import { useNavigateToProfile } from './hooks/use-navigate-to-profile'

export const Profile = () => <TouchableOpacity style={styles.button} onPress={useNavigateToProfile()}>
  <FontAwesome5 name={'user'} style={styles.icon} />
</TouchableOpacity>

const styles = StyleSheet.create<any>({
  button: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
  },
  icon: {
    fontSize: 30,
  }
})