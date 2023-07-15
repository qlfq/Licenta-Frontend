import { mergeMap, of } from 'rxjs'
import {ofType} from "redux-observable";
import {receivedMessage} from "../actions";
import {AnyAction} from "@reduxjs/toolkit";
import {actions, Room} from "../slices/messages";
import {add} from "../helpers/handle-messages";

const perform = state$ => ({ payload }: AnyAction) => {
    const room: Room[] = state$.value.room.data

    const updatedRooms = add(room, payload)

    return of(actions.addMessage(updatedRooms))
}

export default (action$, state$) => action$
    .pipe(ofType(receivedMessage.type))
    .pipe(mergeMap(perform(state$)))