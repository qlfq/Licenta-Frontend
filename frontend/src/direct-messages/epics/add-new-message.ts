import { ofType } from 'redux-observable'
import { mergeMap, of } from 'rxjs'
import { addNewMessage } from '../actions'
import { AnyAction } from '@reduxjs/toolkit'
import { actions } from '../slices/messages'

const perform = (state$) => ({payload}: AnyAction) => {
  const messages = state$.value.dm.messages.data

  const updatedMessages = messages ? [...messages, payload] : [payload]

  return of(actions.success(updatedMessages))
}

export default (action$, state$) => action$
  .pipe(ofType(addNewMessage.type))
  .pipe(mergeMap(perform(state$)))