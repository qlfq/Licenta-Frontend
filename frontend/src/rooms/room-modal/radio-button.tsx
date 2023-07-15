import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textStyle } from '../../styles/text'
import { RadioButton as RNRadioButton} from 'react-native-paper'
import { useContext } from '../context'

export const RadioButton = () => {
  const { values, setFieldValue } = useContext()

  return <View style={style.view}>
    <Text style={textStyle.radioText}>
      Open room
    </Text>
    <RNRadioButton
      value={'isOpen'}
      status={values['isOpen'] ? 'checked' : 'unchecked'}
      onPress={() => setFieldValue('isOpen', !values['isOpen'])}
    />
  </View>
}

const style = StyleSheet.create<any>({
  view: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
