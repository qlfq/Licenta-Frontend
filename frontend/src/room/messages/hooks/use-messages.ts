import { useSelector } from 'react-redux'

export const useMessages = (roomId: number) => useSelector(({ room }) => room.data.find(messages => messages.roomId === roomId))
