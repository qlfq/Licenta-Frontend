import axios from 'axios'
import { from, map } from 'rxjs'

export const deleteRoom = (id: number) => from(axios.get(`rooms/delete?room-id=${id}`))
  .pipe(map(response => response.data))