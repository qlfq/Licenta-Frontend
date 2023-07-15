import { ofType } from 'redux-observable'
import { mergeMap, catchError, of } from 'rxjs'
import { actions } from '../slices/rooms'
import { repositories } from '../repositories'
import { IRoom } from '../interfaces/room'

const success = (payload: IRoom) => of(actions.success(payload))

const failure = error => of(actions.failure(error))

const perform = ({ payload }) => repositories.getAll(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))
export const getAll = actions$ => actions$
  .pipe(ofType(actions.attempt))
  .pipe(mergeMap(perform))
