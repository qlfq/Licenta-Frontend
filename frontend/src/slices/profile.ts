import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  attempt: null,
  data: null,
  error: null,
}

const attempt = (state, { payload }) => ({ ...state, attempt: payload })

const success = (state, { payload }) => ({ ...state, data: payload })

const failure = (state, { payload }) => ({ ...state, error: payload })

const reset = () => initialState

const profileSlice = createSlice<any>({
  name: "ProfileSlice",
  initialState,
  reducers: {
    attempt,
    success,
    failure,
    reset,
  }
})

export const { actions } = profileSlice

export default profileSlice.reducer
