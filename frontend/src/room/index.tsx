import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { WriteMessage } from './write-message'
import { Messages } from './messages'
import { useInitiateRoomsHandlers } from '../ws/hooks/use-initiate-rooms-handlers'
import { useResetOnUnmout } from './hooks/use-reset-on-unmout'
import { useFetchMessages } from "./hooks/use-fetch-messages"
import { Delete } from './delete'
import { DeleteModal } from './delete-modal'

export const Room = () => {
  const {id} = useRoute().params
  useInitiateRoomsHandlers()
  useResetOnUnmout()
  useFetchMessages(id)
  const [deleteModal, setDeleteModal] = useState(false)

  return <View style={styles.container}>
        <Messages roomId={id}/>
        <WriteMessage roomId={id}/>
        <Delete setDeleteModal={setDeleteModal}/>
        <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal}/>
      </View>
}

const styles = StyleSheet.create<any>({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    position: 'relative',
  }
})
