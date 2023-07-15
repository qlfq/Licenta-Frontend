import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { IUser } from '../../interfaces/user'
import { actions } from '../slice/register'

export const useSubmit = () => {
  const dispatch = useDispatch()

  return useCallback((values: IUser) => {
    dispatch(actions.attempt(values))
  }, [dispatch])
}
