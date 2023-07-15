import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { darkColor, primaryColor } from '../constants/colors'

export const Icon = () => <View style={styles.container}>
  <View style={styles.iconContainer}>
    <FontAwesome5 name={'user-astronaut'} style={styles.icon}/>
  </View>
</View>

const styles = StyleSheet.create<any>({
  container: {
    borderRadius: 150,
    backgroundColor: 'white',
    width: 104,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 52
  },
  iconContainer: {
    borderRadius: 150,
    backgroundColor: primaryColor,
    width: 96,
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 44,
  }
})
