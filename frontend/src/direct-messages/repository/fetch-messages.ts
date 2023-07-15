import axios from 'axios'
import { from, map } from 'rxjs'

export const fetchMessages = (payload) => from(axios.get(`/dm/messages?dm-id=${payload}`))
  .pipe(map((result) => result.data))
