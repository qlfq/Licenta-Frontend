import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { List } from 'react-native-paper'
import { useContext } from '../context'
import { useListItemHandle } from './hooks/use-list-item-handle'

type Props = {
  item: {
    username: string,
    id: number,
  }
}

const Icon = (props) => <>
  {
    props.isActive ? <List.Icon {...props} icon="account-plus" /> : <List.Icon {...props} icon="account-remove" />
  }
</>

// check if the users is in the values
const getPersonInfo = (item: any, values: any) => values.persons.find(value => value.userId === item.id)

export const Item = ({ item }: Props) => {
  const { values } = useContext()
  const person = getPersonInfo(item, values)
  const opacity = !!person ? 0.5 : 1

  return <View style={styles(!!person, opacity).itemContainer}>
    <TouchableOpacity onPress={useListItemHandle(item)}>
      <List.Item title={item.username} left={props => <Icon {...props} isActive={!!person} />}/>
    </TouchableOpacity>
  </View>
}

const styles = (isActive: boolean, opacity: number) => StyleSheet.create<any>({
  itemContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    marginBottom: 2,
    backgroundColor: `${isActive ? '#758A8A' : 'white'}`,
    opacity
  },
})
