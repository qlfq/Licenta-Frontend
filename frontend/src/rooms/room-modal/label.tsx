import React from 'react'
import { StyleSheet, Text } from 'react-native'

type Props = {
  text: string
}

export const Label = ({ text }: Props ) => <Text style={styles.text}>
  {text}
</Text>

const styles = StyleSheet.create<any>({
  text: {
    fontFamily: 'sono',
    fontSize: 16,
    marginBottom: 5,
}
})
