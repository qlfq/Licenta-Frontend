import axios from 'axios'
import { from, map } from 'rxjs'

export const create = (payload) => from(axios.post("/rooms/add", payload))
  .pipe(map(response => response.data))
