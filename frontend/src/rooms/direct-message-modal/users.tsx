import React from 'react'
import { useUsers } from '../hooks/use-users'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Item } from './item'

export const Users = () => {
  const users = useUsers()

  return <View style={styles.container}>
      <ScrollView>
        <View style={styles.usersContainer}>
          {
            !!users && users.map((user, index) => <Item username={user.username} id={user.id} key={`${user.id} ${index}`}/>)
          }
        </View>
      </ScrollView>
    </View>
}

const styles = StyleSheet.create<any>({
  container: {
    width: '100%',
    maxHeight: '80%',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  usersContainer: {
    gap: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflowY: 'auto',
  }
})