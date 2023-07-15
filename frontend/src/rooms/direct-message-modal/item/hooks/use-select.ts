import { useContext } from '../../../context'
import { useCallback } from 'react'

export const useSelect = (id: number, username: string) => {
  const { setSingleRoom } = useContext()

  return useCallback(() => {
    setSingleRoom({ id, username })
  }, [setSingleRoom, id, username])
}