import { combineEpics } from 'redux-observable'
import { getAll } from './get-all'
import { create } from './create'
import fetchUsers from './fetch-users'

export const roomsEpics = combineEpics(getAll, create, fetchUsers)
