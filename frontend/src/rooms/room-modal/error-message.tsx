import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { useContext } from '../context'

const emptyMessage = "Insert the room name"

const alreadyExistMessage = "There is already create a room with this name"

export const ErrorMessage = () => {
  const error = useSelector(({ rooms }) => rooms.create.errors)
  const { values } = useContext()
  const text = values.name === '' ? emptyMessage : alreadyExistMessage

  return error && <View style={styles.container}>
    <Text style={styles.errorText}>{text}</Text>
  </View>
}

const styles = StyleSheet.create<any>({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  errorText: {
    width: '75%',
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'sono'
  }
})
