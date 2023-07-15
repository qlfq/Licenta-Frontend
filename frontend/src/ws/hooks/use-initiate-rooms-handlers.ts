import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { receivedMessage } from "../../room/actions"
import { useFilterReceivedMessage } from './use-filter-received-message'
import { useNavigation } from '@react-navigation/native'
import { actions } from '../../rooms/slices/rooms'
import { useUserId } from '../../room/messages/message/hooks/use-user-id'
import { addNewMessage } from '../../direct-messages/actions'
import { DmMessage } from '../../direct-messages/slices/messages'
import { actions as createActions } from '../../rooms/slices/create'
import { useCreateMessage } from '../../core/snackbar/hooks/use-create-message'

type Props = {
  payload: DmMessage
}

const createPayload = (data: any) => ({
  text: data.payload.text,
  senderId: data.payload.senderId,
  roomId: data.payload.roomId,
  username: data.payload.username
})

const createDMPayload = (data: Props) => ({
  id: data.payload.id,
  dmId: data.payload.dmId,
  senderId: data.payload.senderId,
  message: data.payload.message,
  username: data.payload.username,
})

const createNotificationPayload = (id: number, to: string, username: string, message: string) => ({
  title: `New message from ${username}`,
  description: message,
  type: 'info',
  action: {
    to,
    parameter: id,
  }
})

const isError = (event, userId) => event.payload.id === 0 && event.payload.userId === userId

const onMessageHandler = (navigation, dispatch, userId, event, filterReceivedMessage, dispatchNotification) => {
  if (event.type === 'room_deleted' && event.payload?.deleted === true) {
    dispatch(actions.attempt(userId))
    navigation.navigate("Rooms")
  }

  if (event.type === 'new_message') {
    const shouldSave = filterReceivedMessage(event.payload?.usersId)
    if (shouldSave || event.payload?.isOpen === true) {
      const payload = createNotificationPayload(event.payload.roomId, 'Room', event.payload.username, event.payload.text)

      dispatch(receivedMessage(createPayload(event)))

      dispatchNotification(payload)
    }
  }

  if (event.type === 'new_dm_message') {
    const shouldSave = filterReceivedMessage(event.payload?.usersId)
    if(shouldSave) {
      const payload = createNotificationPayload(event.payload.dmId, 'DM', event.payload.username, event.payload.message)
      dispatch(addNewMessage(createDMPayload(event)))

      dispatchNotification(payload)
    }

  }

  if (event.type === 'add_new_room') {
    if (isError(event, userId)) {
      dispatch(createActions.failure("fails"))
    } else {
      dispatch(actions.attempt(userId))
    }
  }
}

export const useInitiateRoomsHandlers = () => {
  const dispatch = useDispatch()
  const userId = useUserId()
  const filterReceivedMessage = useFilterReceivedMessage()
  const navigation = useNavigation()
  const dispatchNotification = useCreateMessage()

  useEffect(() => {
    globalThis.socket.onmessage = event => onMessageHandler(navigation, dispatch, userId, JSON.parse(event.data), filterReceivedMessage, dispatchNotification)
  }, [])
}
