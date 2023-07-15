import { combineEpics } from 'redux-observable'
import { register } from '../register/epics/register'
import { login } from '../login/epic/login'
import { roomsEpics } from '../rooms/epics'
import { commonEpics } from '../ws/epics'
import { roomEpics } from "../room/epics"
import { dmEpics } from '../direct-messages/epics'

export const rootEpics = combineEpics(register, login, roomsEpics, commonEpics, roomEpics, dmEpics)
