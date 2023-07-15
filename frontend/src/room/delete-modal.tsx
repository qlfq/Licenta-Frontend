import React from 'react'
import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { primaryColor } from '../constants/colors'
import { useDeleteRoom } from './hooks/use-delete-room'

type Props = {
  deleteModal: boolean,
  setDeleteModal: (v) => void
}

export const DeleteModal = ({ deleteModal, setDeleteModal }: Props) => <Modal
  visible={deleteModal}
  animationType="none"
  transparent
>
  <TouchableOpacity onPress={() => setDeleteModal(false)} style={styles.backgroundButton} />
  <View style={styles.content}>
    <Text style={styles.text}>Do you want to delete this room?</Text>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.buttonDelete} onPress={useDeleteRoom()}>
        <Text style={styles.textDelete}>
          Delete it
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonKeep} onPress={() => setDeleteModal(false)}>
        <Text style={styles.textKeep}>
          Keep it
        </Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


const styles = StyleSheet.create<any>({
  backgroundButton: {
    width: '100%',
    height: Dimensions.get('window').height,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    top: 0,
    left: 0,
  },
  content: {
    width: '80%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'relative',
    margin: 'auto',
    padding: 50,
    zIndex: 1,
    borderRadius: 15,
    gap: 100,
  },
  text: {
    fontSize: 18,
    fontFamily: 'sono',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    width: '100%',
    height: 56,
    opacity: '1',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  buttonDelete: {
    width: '80%',
    height: 56,
    backgroundColor: 'red',
    opacity: '1',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    transition: '1s',
  },
  buttonKeep: {
    width: '80%',
    height: 56,
    backgroundColor: primaryColor,
    opacity: '1',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    transition: '1s',
  },
  textDelete: {
    fontFamily: 'sono',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    transition: '1s',
  },
  textKeep: {
    fontFamily: 'sono',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    transition: '1s',
  }
})
