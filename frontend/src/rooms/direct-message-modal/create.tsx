import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { primaryColor } from '../../constants/colors'
import { useIsCreateActive } from './hooks/use-is-create-active'
import { useFetchDm } from './hooks/use-fetch-dm'

export const Create = () => {
  const isActive = useIsCreateActive()
  const navigate = useFetchDm()

  return (
    <TouchableOpacity style={styles(isActive).button} onPress={navigate}>
      <Text style={styles(isActive).text}>
        Message >
      </Text>
    </TouchableOpacity>
  )
}

const styles = (isActive?: boolean) => StyleSheet.create<any>({
  button: {
    width: '60%',
    height: 40,
    backgroundColor: isActive ? primaryColor : 'gray',
    opacity: isActive ? '1' : '0.6',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  text: {
    fontFamily: 'sono',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: isActive ? 'black' : 'white',
  }
})