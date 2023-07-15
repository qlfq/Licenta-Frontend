import {ofType} from "redux-observable"
import {mergeMap, catchError, of} from 'rxjs'
import {actions, Message, Room} from "../slices/messages";
import {AnyAction} from "@reduxjs/toolkit";
import {repository} from "../repository";
import {add, afterFetch} from "../helpers/handle-messages";

const success = (roomHistory) => (payload: Message[]) => of(actions.success(afterFetch(roomHistory, payload)))

const failure = (payload: any) => of(actions.failure(payload))

const perform = (state$) => ({ payload }: AnyAction) => {
    const roomsHistory: Room[] = state$.value.room.data

    return repository.fetch(payload)
        .pipe(mergeMap(success(roomsHistory)))
        .pipe(catchError(failure));
}

export const fetchMessages = (actions$, state$) => actions$
    .pipe(ofType(actions.attempt))
    .pipe(mergeMap(perform(state$)))