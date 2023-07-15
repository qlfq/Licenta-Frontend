import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet } from 'react-native'
import backgroundImg from '../assets/images/rooms/background.png'

export const Background = () => <ImageBackground source={backgroundImg} style={styles.image} />

const styles = StyleSheet.create<any>({
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  }
})
