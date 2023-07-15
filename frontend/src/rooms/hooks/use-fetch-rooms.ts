import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions } from '../slices/rooms'
import { useGetUserId } from './use-get-user-id'

export const useFetchRooms = () => {
  const dispatch = useDispatch()
  const userId = useGetUserId()

  useEffect(() => {
    dispatch(actions.attempt(userId))
  }, [dispatch])
}
