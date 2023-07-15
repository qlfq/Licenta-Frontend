import { combineReducers } from '@reduxjs/toolkit'
import registerSlice from '../register/slice/register'
import profileSlice from '../slices/profile'
import loginSlice from '../login/slices/login'
import { roomsSlices } from '../rooms/slices'
import messagesSlice from '../room/slices/messages'
import usersSlice from  '../slices/users'
import { dmSlices } from '../direct-messages/slices'
import deleteRoom from '../room/slices/delete'

export const rootReducers = combineReducers({
  register: registerSlice,
  profile: profileSlice,
  login: loginSlice,
  rooms: roomsSlices,
  room: messagesSlice,
  users: usersSlice,
  dm: dmSlices,
  deleteRoom: deleteRoom
})
