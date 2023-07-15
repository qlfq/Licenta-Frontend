import { from, map } from 'rxjs'
import axios from 'axios'

export const getAll = (userId: string) => from(axios.get(`/rooms/get-all?user-id=${userId}`))
  .pipe(map(response => response.data))
