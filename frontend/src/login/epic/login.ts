import { ofType } from 'redux-observable'
import { mergeMap, of, catchError } from 'rxjs'
import { actions } from '../slices/login'
import { IPayloadUser, IUser } from '../../interfaces/user'
import { repository } from '../repository'
import { actions as profileActions } from '../../slices/profile'

const success = (payload: IUser) => of(profileActions.success(payload), actions.reset())

const failure = (payload: any) => of(actions.failure(payload))

const perform = ({ payload }: IPayloadUser) => repository.login(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

export const login = (actions$) => actions$
  .pipe(ofType(actions.attempt))
  .pipe(mergeMap(perform))
