import React from 'react'
import { useRedirectAfterCreate } from './hooks/use-redirect-after-create'
import { useRedirectHomeWhenFailedWs } from './hooks/use-redirect-home-when-failed-ws'
import { useFetchRooms } from './hooks/use-fetch-rooms'
import { useInitiateRoomsHandlers } from '../ws/hooks/use-initiate-rooms-handlers'
import { useAddEventListener } from '../ws/hooks/use-add-event-listener'
import { useCloseModal } from './hooks/use-close-modal'
import { View } from 'react-native'
import { useFetchUsers } from './hooks/use-fetch-users'

export const Behaviour = () => {
  useFetchRooms()
  useRedirectHomeWhenFailedWs()
  useFetchUsers()
  useRedirectAfterCreate()
  useCloseModal()

  return <View />
}