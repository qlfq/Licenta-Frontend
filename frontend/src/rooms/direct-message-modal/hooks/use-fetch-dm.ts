import { useCallback } from 'react'
import { useProfile } from '../../../hooks/use-profile'
import { useContext } from '../../context'
import { useDispatch } from 'react-redux'
import { actions } from '../../../direct-messages/slices/dm'

const createPayload = (firstId: number, secondId: number) => ({
  firstUserId: firstId,
  secondUserId: secondId,
})

export const useFetchDm = () => {
  const dispatch = useDispatch()
  const userProfile = useProfile()
  const { setDirectMessageModal, singleRoom } = useContext()

  return useCallback(() => {
    dispatch(actions.attempt(createPayload(userProfile.id, singleRoom.id)))
    setDirectMessageModal(false)
  }, [userProfile, singleRoom])
}