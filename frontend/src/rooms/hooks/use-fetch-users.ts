import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions } from '../../slices/users'
import { useProfile } from '../../hooks/use-profile'

export const useFetchUsers = () => {
  const dispatch = useDispatch()
  const profile = useProfile()

  useEffect(() => {
    console.log('Here')
    dispatch(actions.attempt(profile.id))
  }, [])
}