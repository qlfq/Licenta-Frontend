import React from 'react'
import { Dimensions, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Title } from './title'
import { Field } from './field'
import { Create } from './create'
import { Dropdown } from './dropdown'
import { RadioButton } from './radio-button'
import { ErrorMessage } from './error-message'
import { useBehaviour } from './hooks/use-behaviour'
import { useValues } from './hooks/use-values'

export const RoomModal = () => {
  useBehaviour()
  const {modalRoom, closeModal, users} = useValues()

  return <Modal
    visible={modalRoom}
    transparent
  >
    <View style={styles.container}>
      <TouchableOpacity onPress={closeModal} style={styles.backgroundButton}/>
      <View style={styles.content}>
        <Title/>
        <View>
          <Field/>
          <RadioButton/>
          {
            users && <Dropdown users={users}/>
          }
        </View>
        <ErrorMessage/>
        <Create/>
      </View>
    </View>
  </Modal>
}


const styles = StyleSheet.create<any>({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundButton: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    top: 0,
    left: 0,
  },
  content: {
    width: '80%',
    height: '60%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'relative',
    zIndex: 1,
    borderRadius: 15,
  }
})
