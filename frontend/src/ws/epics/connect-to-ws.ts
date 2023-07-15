import { ofType } from 'redux-observable'
import { of, mergeMap, catchError } from 'rxjs'
import { connectToWs } from '../actions'

const success = payload => {
  globalThis.socket = payload

  return of({type: 'Success connecting to websocket'})
}

const failure = payload => {
  return of({type: 'Failed connecting to websocket '})
}

const connect = (state$: any) => () => {
  const otp = state$.value.profile.data.otp
  const websocket = new WebSocket(`ws://localhost:8080/ws?otp=${otp}`)

  return of(websocket)
    .pipe(mergeMap(success))
    .pipe(catchError(failure))
}

export default (action$, state$) => action$
  .pipe(ofType(connectToWs.type))
  .pipe(mergeMap(connect(state$)))
