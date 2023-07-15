import axios from "axios"
import { from, map, tap } from 'rxjs'

export const fetch = (id: number) => from(axios.get(`room/get-messages?roomId=${id}`))
    .pipe(map(response => response.data))
    .pipe(map(response => !!response ? response : []))