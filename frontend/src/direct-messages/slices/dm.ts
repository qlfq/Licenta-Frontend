import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  attempt: null,
  data: null,
  errors: null,
}

const attempt = (state, { payload }) => ({ ...state, attempt: payload })

const success = (state, { payload }) => ({ ...state, data: payload })

const failure = (state, { payload }) => ({ ...state, errors: payload })

const reset = () => initialState


const dm = createSlice({
  name: 'dmSlice',
  initialState,
  reducers: {
    attempt,
    success,
    failure,
    reset,
  }
})

export const selector = ({ dm }) => dm.room.data

export const { actions } = dm

export default dm.reducer