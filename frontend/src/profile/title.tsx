import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const Title = () => <Text style={styles.text}>
  Profile
</Text>

const styles = StyleSheet.create<any>({
  text: {
    fontFamily: 'sono',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  }
})