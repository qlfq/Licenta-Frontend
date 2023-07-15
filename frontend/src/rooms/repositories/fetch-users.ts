import axios from 'axios'
import { from, map, tap } from 'rxjs'

export const fetchUsers = (payload: string) => from(axios.get(`/users/fetch?user-id=${payload}`))
  .pipe(map(response => response.data))