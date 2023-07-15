import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'
import { MessageType, showMessage } from 'react-native-flash-message'

type Props = {
  title: string;
  description: string;
  type: MessageType;
  action: {
    to: string,
    parameter: string;
  };
  duration?: number,
}

export const useCreateMessage = () => {
  const navigation = useNavigation()

  return useCallback(({ title, description, type, action, duration = 5000 }: Props) => {
    showMessage({
      message: title,
      description,
      type: type,
      onPress: () => {
        navigation.navigate(action.to, { id: action.parameter })
      },
      onLongPress: () => {
        navigation.navigate(action.to, { id: action.parameter })
      },
      duration
    })
  }, [])
}