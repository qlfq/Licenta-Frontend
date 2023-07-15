import { useSelector } from 'react-redux'

export const useRooms = () => useSelector(({ rooms }) => rooms.get.data)
