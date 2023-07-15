import { useResetStates } from './use-reset-states'
import { useCallback } from 'react'
import { resetWs } from '../helpers/reset-ws'
import { useNavigation } from '@react-navigation/native'
import { closeConnection } from '../../ws/helpers/close-connection'

export const useLogout = () => {
  const resetStates = useResetStates()
  const navigation = useNavigation()

  return useCallback(() => {
    closeConnection()
    resetWs()
    resetStates()
    navigation.navigate('Home')
  }, [resetStates])
}