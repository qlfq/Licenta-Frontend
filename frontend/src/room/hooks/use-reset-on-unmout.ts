import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actions } from '../slices/messages'

export const useResetOnUnmout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => dispatch(actions.reset())
  }, [dispatch])
}
