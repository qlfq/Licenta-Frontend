import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { actions } from '../../slices/profile'
import { useDispatch } from 'react-redux'

export const useRedirectHomeWhenFailedWs = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    if(globalThis.socket === undefined !== globalThis.socket.readyState === 3) {
      dispatch(actions.reset())
      navigation.navigate('Home')
    }
  }, [navigation, dispatch, globalThis.socket])
}
