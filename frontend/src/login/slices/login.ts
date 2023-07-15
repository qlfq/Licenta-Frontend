import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  attempt: null,
  error: null,
}

const attempt = (state, { payload }) => ({ ...state, attempt: payload })

const failure = (state, { payload }) => ({ ...state, error: payload })

const reset = () => initialState

const loginSlice = createSlice<any>({
  name: 'LoginSlice',
  initialState,
  reducers: {
    attempt,
    failure,
    reset
  }
})

export const { actions } = loginSlice

export default loginSlice.reducer
