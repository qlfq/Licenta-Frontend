import React from 'react'
import { useRooms } from './hooks/use-rooms'
import { FlatList, Text, View } from 'react-native'
import { Item } from './item'
import { use } from '../../profile/hooks/use-reset-ws'

export const List = () => {
  const rooms = useRooms()

  return <View style={{ paddingTop: 15 }}>
    {rooms && rooms.map((user, index) => <Item item={user} key={`${user.id} ${index}`} />)}
  </View>
}
