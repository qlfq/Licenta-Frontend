import React, { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { Content } from './content'
import { Logout } from './logout'
import { Header } from './header'
import { Icon } from './icon'
import { Snackbar } from '../core/snackbar'

export const Profile = () => {
  const profileRef = useRef(null)

  return <View style={styles.container}>
    <Header/>
    <Icon/>
    <Content/>
    <Logout/>
    <Snackbar ref={profileRef}/>
  </View>
}

const styles = StyleSheet.create<any>({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  }
})