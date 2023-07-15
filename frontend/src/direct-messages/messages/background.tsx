import React from 'react'
import backgroundImg from '../../assets/images/rooms/background.png'
import { StyleSheet, Image } from 'react-native'

export const Background = () => <Image source={backgroundImg} style={styles.image} />

const styles = StyleSheet.create<any>({
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    objectFit: 'contain',
  }
})
