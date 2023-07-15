import { useSelector } from 'react-redux'
import { useContext } from '../context'
import { useEffect } from 'react'

export const useCloseModal = () => {
  const attempt = useSelector(({ rooms }) => rooms.get.data)
  const { setModalRoom } = useContext()

  useEffect(() => {
    setModalRoom(false)
  }, [attempt])
}