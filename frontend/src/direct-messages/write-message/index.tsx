import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Input } from './input'
import { Button } from './button'
import { brightColor, darkColor } from '../../constants/colors'

export const WriteMessage = () => {
  const [message, setMessage] = useState('')

  return <View style={styles.container}>
    <View style={styles.inputWrapper}>
      <Input setMessage={setMessage} message={message} />
      <Button message={message} setMessage={setMessage} />
    </View>
  </View>
}

const styles = StyleSheet.create<any>({
  container: {
    width: '100%',
    height: Dimensions.get('window').height / 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: brightColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  inputWrapper: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'space-evenly',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: darkColor,
    borderRadius: 5,
  }
})
