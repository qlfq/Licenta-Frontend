import axios from 'axios'
import { from, map } from 'rxjs'

export const fetchDmDetails = (payload) => from(axios.post('/dm/fetch', payload))
  .pipe(map((result) => result.data))