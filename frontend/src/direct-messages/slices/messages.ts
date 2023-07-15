import { createSlice } from '@reduxjs/toolkit'

export type DmMessage = {
  id: number,
  senderId: number,
  dmId: number,
  username: string,
  message: string,
}

const initialState = {
  attempt: null,
  data: null,
  errors: null,
}

const attempt = (state, { payload }) => ({ ...state, attempt: payload, data: [] })

const success = (state, { payload }) => ({ ...state, data: payload })

const failure = (state, { payload }) => ({ ...state, errors: payload })

const reset = () => initialState

const messages = createSlice({
  name: 'messageSlice',
  initialState,
  reducers: {
    attempt,
    success,
    failure,
    reset,
  }
})

export const selector = ({ dm }) => dm.messages.data

export const { actions } = messages

export default messages.reducer
