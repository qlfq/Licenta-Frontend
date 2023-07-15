import { AnyAction } from '@reduxjs/toolkit'
import { ofType } from 'redux-observable'
import { mergeMap, catchError, of } from 'rxjs'
import { actions } from '../slices/messages'
import { repository } from '../repository'

const success = (payload) => of(actions.success(payload))

const failure = (payload) => of(actions.failure(payload))

const perform = ({ payload }) => repository.fetchMessages(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))


export default (action$) => action$
.pipe(ofType(actions.attempt))
.pipe(mergeMap(perform))