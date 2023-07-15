import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/user'

const initialState = {
  attempt: null,
  success: false,
  error: null,
}

const attempt = (state: any, { payload }: IUser) => ({ ...state, attempt: payload })

const success = (state: any, { payload }: boolean) => ({ ...state, success: payload })

const failure = (state: any, { payload }: any) => ({ ...state, error: payload })

const reset = () => initialState

const registerSlice = createSlice<any>({
  name: 'RegisterSlice',
  initialState,
  reducers: {
    attempt,
    success,
    failure,
    reset
  },
})

export const { actions } = registerSlice
export default registerSlice.reducer
