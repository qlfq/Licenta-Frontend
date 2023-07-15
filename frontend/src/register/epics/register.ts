import { ofType } from 'redux-observable'
import { of, mergeMap, catchError } from 'rxjs'
import { actions } from '../slice/register'
import { actions as profileActions } from '../../slices/profile'
import { IPayloadUser, IUser } from '../../interfaces/user'
import { repository } from '../repository'

const success = (payload: IUser) => of(profileActions.success(payload), actions.reset())

const failure = (error: any) => of(actions.failure(error))

const perform = ({ payload }: IPayloadUser) => repository.register(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

export const register = (action$: any) => action$
  .pipe(ofType(actions.attempt))
  .pipe(mergeMap(perform))
