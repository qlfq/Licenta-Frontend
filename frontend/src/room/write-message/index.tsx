import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Input } from './input'
import { Button } from './button'
import { brightColor, darkColor } from '../../constants/colors'

export const WriteMessage = ({ roomId }) => {
  const [text, setText] = useState('')

  return <View style={styles.container}>
    <View style={styles.inputWrapper}>
      <Input setText={setText} text={text} />
      <Button text={text} setText={setText} roomId={roomId} />
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
