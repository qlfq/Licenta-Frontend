import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useBehaviour } from './hooks/use-behaviour'
import { Messages } from './messages'
import { WriteMessage } from './write-message'

export const DirectMessages = () => {
  useBehaviour()

  return <View style={styles.container}>
    <Messages/>
    <WriteMessage/>
  </View>
}

const styles = StyleSheet.create<any>({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'red',
  }
})