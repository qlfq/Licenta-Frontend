import { createAction } from '@reduxjs/toolkit'
import { DmMessage } from './slices/messages'

export const addNewMessage = createAction('DM/addNewMessage', (payload: DmMessage) => ({
  payload: payload
}))