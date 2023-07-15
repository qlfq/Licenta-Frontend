import React, { useRef } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { ContextProvider } from './context'
import { RoomModal } from './room-modal'
import { List } from './list'
import { Background } from '../core/background'
import { Header } from './header'
import { DirectMessage } from './direct-message'
import { DirectMessageModal } from './direct-message-modal'
import { Behaviour } from './behaviour'
import { Profile } from './profile'
import { useInitiateRoomsHandlers } from '../ws/hooks/use-initiate-rooms-handlers'
import { Snackbar } from '../core/snackbar'

export const Rooms = () => {
  useInitiateRoomsHandlers()
  const roomsRef = useRef(null)

  return <ContextProvider>
    <View>
      <ScrollView>
        <View style={styles.background}>
          <Background/>
          <Header/>
          <List/>
          <DirectMessage/>
          <RoomModal/>
          <DirectMessageModal/>
          <Profile/>
          <Snackbar ref={roomsRef} />
          <Behaviour/>
        </View>
      </ScrollView>
    </View>
  </ ContextProvider>
}

const styles = StyleSheet.create<any>({
  background: {
    width: '100%',
    height: '100%',
    minHeight: Dimensions.get('screen').height,
  },
})
