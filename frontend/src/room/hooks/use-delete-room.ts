import { useCallback } from 'react'
import { useRoute } from '@react-navigation/native'

const createPayload = (roomId: number) => JSON.stringify({
  type: "delete_room",
  payload: {
    roomId
  }
})

export const useDeleteRoom = () => {
  const { id } = useRoute().params

  return useCallback(() => {
    globalThis.socket.send(createPayload(id))
  }, [id])
}