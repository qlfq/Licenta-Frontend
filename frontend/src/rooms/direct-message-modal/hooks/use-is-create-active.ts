import { useContext } from '../../context'

export const useIsCreateActive = () => {
  const { singleRoom } = useContext()

  return singleRoom.id !== 0
}