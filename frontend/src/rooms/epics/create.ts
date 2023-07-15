import { ofType } from 'redux-observable'
import { mergeMap, of, catchError, delay } from 'rxjs'
import { actions } from '../slices/create'
import { repositories } from '../repositories'

const success = (payload) => of(actions.success(payload))

const failure = (payload) => of(actions.failure(payload))

const perform = ({ payload }) => repositories.create(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

export const create = (action$) => action$
  .pipe(ofType(actions.attempt))
  .pipe(mergeMap(perform))
