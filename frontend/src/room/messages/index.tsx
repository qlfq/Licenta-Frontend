import React from 'react'
import { Dimensions, FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Message } from './message'
import { useMessages } from './hooks/use-messages'
import { Background } from '../../core/background'

const Separator = () => <View style={styles.separator}/>

export const Messages = ({roomId}: { roomId: number }) => {
  const room = useMessages(roomId)

  return <ScrollView>
      <View style={styles.container}>
        <Background/>
        <View style={styles.messagesView}>
          {
            room && <FlatList
              showHorizontalScrollIndicator={false}
              data={room.messages}
              renderItem={({item}) => <Message message={item}/>}
              ItemSeparatorComponent={() => <Separator/>}
              keyExtractor={(item, index) => `${item.id} ${index}`}
            />
          }
        </View>
      </View>
    </ScrollView>
}

const styles = StyleSheet.create<any>({
  container: {
    width: '100%',
    height: '100%',
    minHeight: (Dimensions.get('window').height),
    position: 'absolute',
    top: 0,
    paddingTop: 5,
  },
  separator: {
    width: '100%',
    height: 5,
  },
  messagesView: {
    width: '100%',
    height: '100%',
    paddingBottom: 15,
  }
})
