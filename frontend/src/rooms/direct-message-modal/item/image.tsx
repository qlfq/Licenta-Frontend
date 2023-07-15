import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
import { darkColor } from '../../../constants/colors'

export const Image = () => (
  <View style={styles.container}>
    <FontAwesome5 name={'user-astronaut'} style={styles.icon} />
  </View>
)

const styles = StyleSheet.create<any>({
  container: {
    borderRadius: 150,
    backgroundColor: darkColor,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 32,
  }
})