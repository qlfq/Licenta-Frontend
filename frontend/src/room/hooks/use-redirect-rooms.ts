import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { actions } from '../../rooms/slices/rooms'

export const useRedirectRooms = () => {
  const deleted = useSelector(({ deleteRoom }) => deleteRoom.data)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    if(deleted) {
      dispatch(actions.attempt())
      navigation.navigate('Rooms')
    }
  }, [deleted])
}