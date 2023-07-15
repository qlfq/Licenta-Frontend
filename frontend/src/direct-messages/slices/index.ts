import { combineReducers } from '@reduxjs/toolkit'
import dm from './dm'
import messages from './messages'

export const dmSlices = combineReducers({ room: dm, messages })