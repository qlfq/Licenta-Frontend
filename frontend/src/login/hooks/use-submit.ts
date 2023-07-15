import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions } from '../slices/login'

export const useSubmit = () => {
  const dispatch = useDispatch()

  return useCallback(values => {
    dispatch(actions.attempt(values))
  }, [dispatch])
}
