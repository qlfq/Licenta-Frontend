import { IRoom } from '../interfaces/room'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  attempt: null,
  data: null,
  errors: null,
}

const attempt = state => ({ ...state })

const success = (state, { payload }: IRoom[]) => ({ ...state, data: payload })

const failure = (state, { payload }: any) => ({ ...state, errors: payload })

const reset = () => initialState

const roomsSlice = createSlice<any>({
  name: "RoomsSlice",
  initialState,
  reducers: {
    attempt,
    success,
    failure,
    reset,
  }
})

export const { actions } = roomsSlice

export default roomsSlice.reducer
