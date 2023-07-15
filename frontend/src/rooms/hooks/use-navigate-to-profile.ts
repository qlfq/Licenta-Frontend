import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

export const useNavigateToProfile = () => {
  const navigate = useNavigation()

  return useCallback(() => {
    navigate.navigate('Profile')
  }, [])
}