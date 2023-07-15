import { useCallback } from 'react'
import { useGetUserId } from './use-get-user-id'

const createPayload = (values: any, userId: number) => JSON.stringify({
  type: 'send_room',
  payload: {
    ...values,
    userId,
  }
})

export const useCreateRoom = () => {
  const userId = useGetUserId()

  return useCallback((values: any) => {
    globalThis.socket.send(createPayload(values, parseInt(userId)))
  }, [userId])
}
