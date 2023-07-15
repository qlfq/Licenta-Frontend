import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { connectToWs } from '../ws/actions'

export const useRedirectSignIn = () => {
  const navigation = useNavigation()
  const profileData = useSelector(({ profile }) => profile.data)
  const dispatch = useDispatch()

  useEffect(() => {
    if(profileData) {
      if(!globalThis.socket) {
        dispatch(connectToWs())
        navigation.navigate('Rooms')
      }
    }
  }, [dispatch, navigation, profileData])
}
