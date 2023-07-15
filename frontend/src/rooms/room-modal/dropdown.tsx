import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Label } from './label'
import { useContext } from '../context'
import { Item } from './item'

export const Dropdown = ({ users }: any) => {
  const { values } = useContext()

  return (
    <View style={values['isOpen'] ? styles.containerInactive : styles.container}>
      <Label text={"Invite your friends"} />
      <View style={styles.listContainer}>
        <FlatList data={users} renderItem={({ item }) => <Item item={item} />} keyExtractor={(user, index) => `${index}`} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: 'white',
    padding: 15,
  },
  containerInactive: {
    width: 250,
    backgroundColor: 'white',
    padding: 15,
    opacity: 0.3,
    pointerEvents: 'none'
  },
  listContainer: {
    height: 150,
    overflowY: 'auto',
    width: '100%',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    fontFamily: 'sono',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontFamily: 'sono',
    fontSize: 16,
  },
  selectedTextStyle: {
    fontFamily: 'sono',
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
