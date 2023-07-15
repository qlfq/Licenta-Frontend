import { createSlice } from '@reduxjs/toolkit'

export type Room = {
  messages: RoomMessage[],
  roomId: number,
}

export type RoomMessage = {
  username: string,
  userId: number,
  text: string,
}

export type Message = {
  roomId: number,
  username: string,
  senderId: number,
  text: string,
}

const initialState = {
  attempt: null,
  data: [],
  errors: null,
}



const addMessage = (state, { payload }) => ({...state, data: payload})

const attempt = (state, { payload }) => ({ ...state, attempt: payload, data: [] })

const success = (state, { payload }) => ({ ...state, data: payload })

const failure = (state, { payload }) => ({ ...state, error: payload })

const reset = () => initialState

const MessagesSlice = createSlice({
  name: 'Messages',
  initialState,
  reducers: {
    addMessage,
    attempt,
    success,
    failure,
    reset,
  }
})

export const { actions } = MessagesSlice

export default MessagesSlice.reducer
