import { from, map, tap } from 'rxjs'
import { IUser } from '../../interfaces/user'
import axios from 'axios'

export const login = (payload: IUser) => from(axios.post("/login", payload))
  .pipe(tap(response => console.log('Response: ', response.data)))
  .pipe(map(response => response.data))
