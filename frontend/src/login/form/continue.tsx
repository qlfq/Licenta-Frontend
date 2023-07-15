import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { primaryColor } from '../../constants/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { useContext } from '../context'
import { isObjEmpty } from '../../helpers/is-obj-empty'

export const Continue = () => {
  const { handleSubmit } = useContext()
  const { errors } = useContext()

  return <TouchableOpacity style={style(isObjEmpty(errors)).button} onPress={handleSubmit} disabled={!isObjEmpty(errors)}>
    <Text>
      Continue
    </Text>
    <FontAwesome5 name={'chevron-right'} style={style().icon}/>
  </TouchableOpacity>
}

const style = (isActive?: boolean) => StyleSheet.create({
  button: {
    width: '80%',
    height: 45,
    backgroundColor: `${isActive ? primaryColor : 'gray' }` ,
    fontFamily: 'sono',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    borderRadius: 15,
    marginTop: 50,
  },
  icon: {
    fontSize: 18,
    position: 'absolute',
    right: 15,
  }
})
