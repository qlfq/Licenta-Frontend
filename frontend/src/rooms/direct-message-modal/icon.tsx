import React from 'react'
import { List } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export const Icon = (props) => (
  <>
    <List.Icon icon={'account-supervisor-circle'} {...props} style={styles.icon} />
  </>
)

const styles = StyleSheet.create<any>({
  icon: {
    fontSize: 80,
  }
})