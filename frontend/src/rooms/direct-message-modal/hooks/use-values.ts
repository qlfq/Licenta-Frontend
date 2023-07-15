import { useContext } from '../../context'
import { useUsers } from '../../hooks/use-users'

export const useValues = () => {
  const { directMessageModal, setDirectMessageModal } = useContext()
  const closeModal = () => setDirectMessageModal(false)

  return { directMessageModal, closeModal }
}