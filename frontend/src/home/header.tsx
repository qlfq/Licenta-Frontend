import React from 'react'
import { Image, Text, View } from 'react-native'
import message from '../assets/images/login/chat.png'
import { style } from './header-style'

export const Header = () => <View style={style.header}>
  <Text style={style.title}>
    Welcome
  </Text>
  <View style={style.iconContainer}>
    <Image source={message} style={style.imageStyle} />
  </View>
</View>
