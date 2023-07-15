import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { mainTextColor } from '../../constants/colors'

export const Promo = () => <Text style={style.text}>
  A platform build for a new way of discussions
</Text>

const style = StyleSheet.create({
  text: {
    fontFamily: 'sonoLight',
    textAlign: 'center',
    color: mainTextColor,
    fontSize: 18,
    marginTop: 75,
    marginLeft: 15,
    marginRight: 15,
  }
})
