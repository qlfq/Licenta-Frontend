import { AnyAction, Observable } from '@reduxjs/toolkit'
import { ofType } from 'redux-observable'
import { mergeMap, catchError, of } from 'rxjs'
import { actions } from '../../slices/users'
import { repositories } from '../repositories'

const success = (payload) => of(actions.success(payload))

const failure = (payload) => of(actions.failure(payload))

const perform = ({ payload }: AnyAction) => {
  console.log('Baaaaaa')

  return repositories.fetchUsers(payload)
    .pipe(mergeMap(success))
    .pipe(catchError(failure))
}

export default (action$: Observable<AnyAction>) => action$
    .pipe(ofType(actions.attempt))
    .pipe(mergeMap(perform))