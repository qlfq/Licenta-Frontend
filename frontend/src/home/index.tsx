import React from 'react'
import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Header } from './header'
import { Content } from './content'

export const Home = () => {
  console.log('Foo: ', Dimensions.get('window').height / 2)
  console.log('klhsdfa: ', Dimensions.get('window').height)

  return <SafeAreaView style={style.container}>
    <ScrollView>
      <Header/>
      <Content/>
    </ScrollView>
  </SafeAreaView>
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
})
