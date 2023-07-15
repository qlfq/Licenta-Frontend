import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useContext } from '../context'
import { actions as createActions } from '../slices/create'
import { actions as getActions } from '../slices/rooms'
import { useGetUserId } from './use-get-user-id'

export const useRedirectAfterCreate = () => {
  const navigation = useNavigation()
  const roomCreate = useSelector(({ rooms }) => rooms.create.data )
  const { setDirectMessageModal, setModalRoom } = useContext()
  const dispatch = useDispatch()
  const userId = useGetUserId()

  useEffect(() => {
    if(roomCreate) {
      dispatch(createActions.reset())
      dispatch(getActions.attempt(userId))
      setDirectMessageModal(false)
      setModalRoom(false)
      // navigation.navigate("Room", { id: roomCreate.id })
    }
  }, [roomCreate])
}