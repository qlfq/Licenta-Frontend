import { useSelector } from 'react-redux'
import { selector } from '../../slices/messages'

export const useMessages = () => useSelector(selector)
