import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {actions} from "../slices/messages";

export const useFetchMessages = (id: number) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.attempt(id))
    }, [])
}