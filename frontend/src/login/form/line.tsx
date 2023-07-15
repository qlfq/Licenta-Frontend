import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { darkColor } from '../../constants/colors'

export const Line = () => <View style={style.container}>
  <View style={style.line} />
  <Text>
    OR
  </Text>
  <View style={style.line} />
</View>

const style = StyleSheet.create({
  container: {
    width: '80%',
    height: 1,
    position: 'relative',
    marginTop: 25,
    marginBottom: 25,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  line: {
    width: 30,
    height: 1,
    backgroundColor: darkColor,
    marginLeft: 5,
    marginRight: 5,
  }
})
