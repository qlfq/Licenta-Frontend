import { combineEpics } from 'redux-observable'
import fetchDmDetails from './fetch-dm-details'
import fetchMessages from './fetch-messages'
import addNewMessage from './add-new-message'

export const dmEpics = combineEpics(fetchDmDetails, fetchMessages, addNewMessage)