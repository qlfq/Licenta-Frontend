import { combineEpics } from 'redux-observable'
import connectToWs from './connect-to-ws'

export const commonEpics = combineEpics(connectToWs)
