import React from 'react'
import { Dimensions, FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Message } from './message'
import { useMessages } from './hooks/use-messages'
import { Background } from '../../core/background'

const Separator = () => <View style={styles.separator}/>

export const Messages = () => {
  const messages = useMessages()

  return <ScrollView style={{ width: '100%' }}>
    <View style={styles.container}>
      <Background/>
      <View style={styles.messagesView}>
        {
          messages && <FlatList
            showHorizontalScrollIndicator={false}
            data={messages}
            style={{ width: '100%' }}
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
    minHeight: Dimensions.get('screen').height,
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
    height: '89%',
  }
})
