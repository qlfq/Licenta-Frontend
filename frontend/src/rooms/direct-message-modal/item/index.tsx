import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from './image'
import { useContext } from '../../context'
import { useSelect } from './hooks/use-select'

type Props = {
  username: string,
  id: number
}

export const Item = ({ username, id }: Props) => {
  const { singleRoom } = useContext()
  const isFocused = id === singleRoom.id
  const handleClick = useSelect(id, username)

  return (
    <View style={styles(isFocused).container}>
      <TouchableOpacity onPress={handleClick} style={styles().button}>
        <Image/>
        <Text style={styles().text}>{username}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = (isFocused?: boolean) => StyleSheet.create<any>({
  container: {
    width: '45%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    backgroundColor: isFocused ? '#a2b2ab' : 'transparent',
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  text: {
    fontFamily: 'sono',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})