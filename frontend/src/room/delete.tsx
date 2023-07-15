import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export const Delete = ({ setDeleteModal }: any) => {
  const handleButton = () => setDeleteModal(true)

  return <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={handleButton}>
      <FontAwesome5 name={'trash'} style={styles.icon}/>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 2,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
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
    fontSize: 24,
    fill: 'red',
    color: 'red'
  }
})
