import { useSelector } from 'react-redux'

export const useUserId = () => parseInt(useSelector(({ profile }: any) => profile.data.user.id))
