import React from 'react'
import { StyleSheet, View } from 'react-native'
import { darkColor } from '../constants/colors'
import { Title } from './title'

export const Header = () => <View style={styles.header}>
  <Title />
</View>

const styles = StyleSheet.create<any>({
  header: {
    height: '20%',
    width: '100%',
    backgroundColor: darkColor,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  }
})