import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useProfile } from '../hooks/use-profile'

export const Content = () => {
  const profile = useProfile()
  console.log('Profile: ', profile)

  return <View style={styles.container}>
    <Text style={styles.text}>
      <Text style={styles.span}>Username:</Text> {profile.username}
    </Text>
    <Text style={styles.text}>
      <Text style={styles.span}>Email: </Text>{profile.email}
    </Text>
  </View>
}

const styles = StyleSheet.create<any>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  text: {
    fontFamily: 'sono',
    fontSize: 18,
    minWidth: '60%'
  },
  span: {
    fontFamily: 'sono',
    fontSize: 24,
    fontWeight: 'bold',
  }
})