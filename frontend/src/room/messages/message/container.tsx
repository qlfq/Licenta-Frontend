import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { useUserId } from './hooks/use-user-id'
import { brightColor, ownMessageBackgroundColor } from '../../../constants/colors'

type Props = {
  messageUserId: number,
}

export const Container: React.FC<Props> = ({ children, messageUserId }) => {
  const userId = useUserId()

  const userMessageStyle = {
    ...styles.commonStyle,
    ...styles.rightStyle,
  }

  const style: any = messageUserId === userId ? userMessageStyle : styles.commonStyle

  return <View style={style}>
    {children}
  </View>
}

const styles = StyleSheet.create<any>({
  commonStyle: {
    width: '100%',
    maxWidth: (Dimensions.get('window').width * 60) / 100,
    minHeight: 55,
    backgroundColor: brightColor,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 15,
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 0,
    paddingRight: 0,
  },
  rightStyle: {
    marginLeft: 'auto',
    marginRight: 15,
    backgroundColor: ownMessageBackgroundColor,
  }
})
