import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  attempt: null,
  data: null,
  errors: null,
}

const attempt = (state, { payload }) => ({ ...state, attempt: payload })

const success = (state, { payload }) => ({ ...state, data: payload })

const failure = (state, { payload }) => ({ ...state, error: payload })

const reset = () => initialState

const DeleteSlice = createSlice({
  name: 'Delete',
  initialState,
  reducers: {
    attempt,
    success,
    failure,
  }
})

export const { actions } = DeleteSlice

export default DeleteSlice.reducer
