import { useSelector } from 'react-redux'

export const useGetUserId = (): string => useSelector(({ profile }: any) => profile.data.user.id)
