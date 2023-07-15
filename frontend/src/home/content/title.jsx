import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { mainTextColor } from '../../constants/colors'

export const Title = () => <Text style={style.title}>
  Chatrio
</Text>

const style = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: mainTextColor,
    fontSize: 54.4,
    fontFamily: 'sono',
    marginTop: 100,
  }
})
