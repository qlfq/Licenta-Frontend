import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

export const useOnPress = (id: number) => {
  const navigation = useNavigation()

  return useCallback(() => {
    navigation.navigate("Room", { id })
  }, [navigation, id])
}
