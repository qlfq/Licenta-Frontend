import { combineReducers } from '@reduxjs/toolkit'
import roomsSlice from './rooms'
import createSlice from './create'

export const roomsSlices = combineReducers({
  get: roomsSlice,
  create: createSlice,
})
