import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDmRoom } from '../../../direct-messages/hooks/use-dm-room'

export const useNavigateToDm = () => {
  const navigate = useNavigation()
  const dm = useDmRoom()

  useEffect(() => {
    if(dm) {
      navigate.navigate('DM', { id: dm.id })
    }
  }, [dm, navigate])
}