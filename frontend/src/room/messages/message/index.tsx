import React from 'react'
import { Container } from './container'
import { StyleSheet, Text } from 'react-native'
import { mainTextColor } from '../../../constants/colors'
import { Username } from "./username"
import { Message as MessageProp } from '../../slices/messages'

type Props = {
  message: MessageProp
}

export const Message = ({message}: Props) => {
  const userId = message?.senderId ? message.senderId : message.userId

  return <Container messageUserId={userId}>
    <Username username={message.username} messageUserId={message.senderId}/>
    <Text style={styles.text}>
      {message.text}
    </Text>
  </Container>
}

const styles = StyleSheet.create<any>({
  text: {
    fontFamily: 'sono',
    fontSize: 18,
    color: mainTextColor,
    marginLeft: 15
  }
})
