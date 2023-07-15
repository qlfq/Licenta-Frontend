import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions as roomActions } from '../../room/slices/messages'
import { actions as dmMessagesActions } from '../../direct-messages/slices/messages'
import { actions as dmActions } from '../../direct-messages/slices/dm'
import { actions as roomsActions } from '../../rooms/slices/rooms'
import { actions as profileActions } from '../../slices/profile'
import { actions as usersActions } from '../../slices/users'

export const useResetStates = () => {
  const dispatch = useDispatch()

  return useCallback(() => {
    dispatch(roomActions.reset())
    dispatch(roomsActions.reset())
    dispatch(dmActions.reset())
    dispatch(dmMessagesActions.reset())
    dispatch(usersActions.reset())
    dispatch(profileActions.reset())
  }, [])
}