import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const messageHandler = (dispatch, data) => {
}

export const useAddEventListener = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    globalThis.socket.onmessage = event => messageHandler(dispatch, JSON.parse(event.data))
  }, [])
}