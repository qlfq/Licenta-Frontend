import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { actions } from '../../rooms/slices/rooms'

const roomHandler = (dispatch, navigation, event) => {
  if(event.type === 'room_deleted', event.payload.deleted === true) {
    dispatch(actions.attempt())
  }
}

export const useRoomDeleted = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    globalThis.socket.onmessage = event => roomHandler(dispatch, navigation, JSON.parse(event.data))
  })
}