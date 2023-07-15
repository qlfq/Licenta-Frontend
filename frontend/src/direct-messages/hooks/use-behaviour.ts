import { useFetchMessages } from './use-fetch-messages'
import { useInitiateRoomsHandlers } from '../../ws/hooks/use-initiate-rooms-handlers'

export const useBehaviour = () => {
  useFetchMessages()
  useInitiateRoomsHandlers()
}