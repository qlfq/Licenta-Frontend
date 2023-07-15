import { useSelector } from "react-redux";

export const useUsername = () => useSelector(({ profile }: any) => profile.data.user.username)