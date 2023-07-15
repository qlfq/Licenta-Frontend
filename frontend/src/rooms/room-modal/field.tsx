import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from './input'

export const Field = () => <View style={styles.field}>
  <Input placeholder={"Room name"} value={"name"} />
</View>

const styles = StyleSheet.create<any>({
  field: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
})
