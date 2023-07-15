import {combineEpics} from "redux-observable";
import {fetchMessages} from "./fetch-messages";
import receivedMessage from './receive-message'
import deleteRoom from './delete'

export const roomEpics = combineEpics(fetchMessages, receivedMessage, deleteRoom)