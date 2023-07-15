import React from 'react'
import { Container } from './container'
import { StyleSheet, Text } from 'react-native'
import { mainTextColor } from '../../../constants/colors'
import { Username } from "./username"

type Props = {
  message: {
    message: string,
    senderId: number,
    username: string,
  },
}

export const Message = ({message}: Props) => <Container messageUserId={message.senderId}>
  <Username username={message.username} messageUserId={message.senderId}/>
  <Text style={styles.text}>
    {message.message}
  </Text>
</Container>

const styles = StyleSheet.create<any>({
  text: {
    fontFamily: 'sono',
    fontSize: 18,
    color: mainTextColor,
    marginLeft: 15
  }
})
