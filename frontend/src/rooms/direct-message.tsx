import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { darkColor, primaryColor } from '../constants/colors'
import { useContext } from './context'

export const DirectMessage = () => {
  const { setDirectMessageModal } = useContext()
  const handleButton = () => setDirectMessageModal(true)

  return <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={handleButton}>
      <FontAwesome5 name={'comment'} style={styles.icon}/>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    zIndex: 2,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  icon: {
    fontSize: 32,
  }
})
