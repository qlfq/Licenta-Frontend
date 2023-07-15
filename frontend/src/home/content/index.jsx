import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Title } from './title'
import { Promo } from './promo'
import { GetStarted } from './get-started'

export const Content = () => {
  const navigation = useNavigation()

  const navigate = () => navigation.navigate('Home')

  return <View style={style.container}>
    <Title />
    <Promo />
    <GetStarted />
  </View>
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: (Dimensions.get('window').height * 60) / 100,
    flexDirection: 'column',
    alignItems: 'center',
  },
})
