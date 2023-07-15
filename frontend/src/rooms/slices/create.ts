import { IRoom } from '../interfaces/room'
import { createSlice } from '@reduxjs/toolkit'

type CreateRoom = {
  payload: {
    name: string,
    persons: number[],
  }
}

const initialState = {
  attempt: null,
  data: null,
  errors: null,
}

const attempt = (state, { payload }: CreateRoom) => ({ ...state, attempt: payload, errors: null })

const success = (state, { payload }: IRoom) => ({ ...state, data: payload })

const failure = (state, { payload }) => ({ ...state, errors: payload })

const resetError = () => ({ errors: null })

const reset = () => initialState

const create = createSlice<any>({
  name: "CreateRoom",
  initialState,
  reducers: {
    attempt,
    success,
    failure,
    reset,
    resetError
  }
})

export const { actions } = create

export default create.reducer

