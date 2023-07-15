import { useSelector } from 'react-redux'

export const useProfile = () => useSelector(({ profile }) => profile.data?.user)