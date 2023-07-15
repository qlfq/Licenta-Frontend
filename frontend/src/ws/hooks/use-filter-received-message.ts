import { useProfile } from '../../hooks/use-profile'
import { useCallback } from 'react'

export const useFilterReceivedMessage = () => {
  const profile = useProfile()

  return useCallback((usersIds: number[]) => usersIds && !!usersIds.find(userId => userId === profile.id), [profile])
}