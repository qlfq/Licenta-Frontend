import React from 'react'
import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useValues } from './hooks/use-values'
import { Users } from './users'
import { Create } from './create'
import { useNavigateToDm } from './hooks/use-navigate-to-dm'

export const DirectMessageModal = () => {
  useNavigateToDm()
  const {directMessageModal, closeModal} = useValues()

  return <Modal
    visible={directMessageModal}
    animationType={'none'}
    transparent
  >
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Start messaging</Text>
        <Users/>
        <Create/>
      </View>
      <TouchableOpacity onPress={closeModal} style={styles.backgroundButton}/>
    </View>
  </Modal>
}

const styles = StyleSheet.create<any>({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'relative',
    zIndex: 5,
    alignItems: 'center',
    justifyContent: 'center'
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
    width: (Dimensions.get('screen').width * 80) / 100,
    height: (Dimensions.get('screen').height * 60) / 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'relative',
    padding: 50,
    zIndex: 1,
    borderRadius: 15,
    gap: 30,
  },
  text: {
    fontSize: 22.4,
    fontFamily: 'sono',
    textAlign: 'center',
    fontWeight: 'bold',
  }
})