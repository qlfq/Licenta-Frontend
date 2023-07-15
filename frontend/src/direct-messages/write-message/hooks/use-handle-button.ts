import { useCallback } from 'react'
import { useUserId } from '../../messages/message/hooks/use-user-id'
import { useRoute } from '@react-navigation/native'
import { useUsername } from '../../../hooks/use-username'

const createPayload = (message: string, dmId: number, userId: number, username: string) => JSON.stringify({
  type: 'send_dm_message',
  payload: {
    message,
    username,
    senderId: userId,
    dmId,
  }
})

export const useHandleButton = (message: string, setMessage: (v: string) => null) => {
  const userId = useUserId()
  const username = useUsername()
  const { id } = useRoute().params

  return  useCallback(() => {
    setMessage('')
    globalThis.socket.send(createPayload(message, id, userId, username))
  }, [message, userId, username, id])
}
