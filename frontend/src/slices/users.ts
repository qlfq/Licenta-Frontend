import { createSlice } from '@reduxjs/toolkit'

export type User = {
  id: number,
  username: string,
}

const initialState = {
  attempt: null,
  data: null,
  errors: null,
}

const attempt = state => ({ ...state })

const success = (state, { payload }: User[]) => ({ ...state, data: payload })

const failure = (state, { payload }: any) => ({ ...state, errors: payload })

const reset = () => initialState

const usersSlice = createSlice<any>({
  name: 'UsersSlice',
  initialState,
  reducers: {
    attempt,
    success,
    failure,
    reset,
  }
})

export const { actions } = usersSlice

export default usersSlice.reducer