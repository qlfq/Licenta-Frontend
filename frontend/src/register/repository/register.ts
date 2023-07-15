import { from, map, tap } from 'rxjs'
import axios from 'axios'
import { IUser } from '../../interfaces/user'

export const register = (payload: IUser) => {
  console.log('Payload: ', payload)

  return from(axios.post('/register', payload))
    .pipe(map(response => response.data))
}
