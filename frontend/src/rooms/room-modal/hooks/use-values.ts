import { useContext } from '../../context'
import { useUsers } from '../../hooks/use-users'

export const useValues = () => {
  const { modalRoom, setModalRoom } = useContext()
  const closeModal = () => setModalRoom(false)
  const users = useUsers()

  return { modalRoom, setModalRoom, closeModal, users }
}