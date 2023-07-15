import {createAction} from "@reduxjs/toolkit";
import {Message} from "./slices/messages";

export const receivedMessage = createAction('room/receiveMessage', (message: Message) => {
    return {
        payload: message,
    }
})

export const deleteRoom = createAction('room/delete', (roomId) => {
    return {
        payload: roomId
    }
})