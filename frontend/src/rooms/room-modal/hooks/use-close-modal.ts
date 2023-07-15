import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { actions as createActions } from '../../slices/create'
import { actions as getActions } from '../../slices/rooms'
import { useContext } from '../../context'
import { useGetUserId } from '../../hooks/use-get-user-id'

export const useCloseModal = () => {
  const roomAdded = useSelector(({ rooms }) => rooms.create.data)
  const dispatch = useDispatch()
  const { setModalRoom } = useContext()
  const userId = useGetUserId()

  useEffect(() => {
    if(roomAdded) {
      dispatch(createActions.reset())
      dispatch(getActions.attempt(userId))
      setModalRoom(false)
    }
  }, [dispatch, setModalRoom, roomAdded, userId])
}
