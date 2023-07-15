import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Title = () => <View style={style.container}>
  <Text style={style.title}>
    Chatrio
  </Text>
  <Text style={style.login}>
    Login
  </Text>
</View>

const style = StyleSheet.create({
  container: {
    marginTop: '25%',
    marginBottom: '10%',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'sono',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 50,
  },
  login: {
    textAlign: 'center',
    fontSize: 22.4,
    fontFamily: 'sonoLight',
    marginTop: 0,
  }
})
