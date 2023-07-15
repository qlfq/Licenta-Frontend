import { useSelector } from 'react-redux'

export const useUsers = () => useSelector(({ users }) => users.data)