import { useCallback } from 'react'
import { useUserId } from '../../messages/message/hooks/use-user-id'
import { useUsername } from '../../../hooks/use-username'

const createPayload = (text: string, roomId: number, userId: number, username: string) => JSON.stringify({
  type: 'send_message',
  payload: {
    text,
    username,
    senderId: userId,
    roomId,
  }
})

export const useHandleButton = (text: string, roomId: number, setText) => {
  const userId = useUserId()
  const username = useUsername()

  return  useCallback(() => {
    setText('')
    globalThis.socket.send(createPayload(text, roomId, userId, username))
  }, [text])
}
