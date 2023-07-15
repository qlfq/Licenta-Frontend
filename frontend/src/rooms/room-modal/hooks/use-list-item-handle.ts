import { useContext } from '../../context'
import { useCallback } from 'react'

type Props = {
  username: string,
  id: number,
}

export const useListItemHandle = (item: Props) => {
  const { values, setFieldValue } = useContext()

  return useCallback(() => {
    const exist = values.persons.find(value => value.userId === item.id)

    if(exist) {
      setFieldValue('persons', [...values.persons.filter(value => value.userId !== item.id)])
    } else {
      setFieldValue('persons', [...values.persons, { userId: item.id, username: item.username }])
    }
  }, [values, setFieldValue, item])
}
