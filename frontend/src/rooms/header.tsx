import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { darkColor, primaryColor } from '../constants/colors'
import { useContext } from './context'

export const Header = () => {
  const { setModalRoom } = useContext()
  const handleButton = () => setModalRoom(true)

  return <View style={styles.container}>
    <Text style={styles.text}>
      Chats
    </Text>
    <TouchableOpacity style={styles.button} onPress={handleButton}>
      <Text style={styles.buttonText}>
        Creat new group
      </Text>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create<any>({
  container: {
    width: '100%',
    height: '20%',
    justifyContent: 'space-evenly',
    backgroundColor: darkColor,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    position: 'relative',
  },
  text: {
    fontFamily: 'sono',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 45,
  },
  button: {
    width: '50%',
    height: 40,
    backgroundColor: primaryColor,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'sono',
    color: darkColor,
    fontWeight: 'medium',
    textAlign: 'center',
    fontSize: 16,
  }
})
