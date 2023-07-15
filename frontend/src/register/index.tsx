import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Title } from './title'
import { Form } from './form'
import { ContextProvider } from './context'
import { useRedirectSignIn } from '../hooks/use-redirect-sign-in'

export const Register = () => {
  useRedirectSignIn()

  return <ContextProvider>
    <ScrollView>
      <View style={style.container}>
        <Title/>
        <Form/>
      </View>
    </ScrollView>
  </ContextProvider>
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  }
})
