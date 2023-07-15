import { useDispatch } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { actions } from '../slices/messages'

export const useFetchMessages = () => {
  const dispatch = useDispatch()
  const { id } = useRoute().params

  useEffect(() => {
    dispatch(actions.attempt(id))
  }, [id])
}