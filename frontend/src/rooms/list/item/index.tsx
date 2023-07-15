import React, { useState } from 'react'
import { IRoom } from '../../interfaces/room'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { brightColor, darkColor } from '../../../constants/colors'
import { Avatar } from './avatar'
import { useOnPress } from './hooks/use-on-press'
import { FontAwesome5 } from '@expo/vector-icons'

interface Item {
  item: IRoom
}

export const Item = ({item}: Item) => <TouchableOpacity onPress={useOnPress(item.id)}>
  <View style={styles.container}>
    <Avatar/>
    <View style={{flexDirection: 'row', flexGrow: 1 }}>
      <Text style={styles.text}>
        {item.name}
      </Text>
    </View>
    <FontAwesome5 name={'paper-plane'} style={styles.icon} />
  </View>
</TouchableOpacity>
const styles = StyleSheet.create<any>({
  container: {
    width: '90%',
    height: 80,
    position: 'relative',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    backgroundColor: brightColor,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: darkColor,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10
  },
  text: {
    fontFamily: 'sono',
    fontSize: 16,
  },
  icon: {
    fontSize: 20,
    marginRight: 25,
  }
})
