import { ofType } from 'redux-observable'
import { of, mergeMap, catchError } from 'rxjs'
import { deleteRoom } from '../actions'
import { repository } from '../repository'
import { actions } from '../slices/delete'

const success = () => of(actions.success(true))

const failure = () => of(actions.failure())

const perform = ({ payload }) => repository.deleteRoom(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

export default (action$) => action$
.pipe(ofType(deleteRoom.type))
.pipe(mergeMap(perform))