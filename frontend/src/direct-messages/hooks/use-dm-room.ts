import { useSelector } from 'react-redux'
import { selector } from '../slices/dm'

export const useDmRoom = () => useSelector(selector)