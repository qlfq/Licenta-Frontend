import {Message, Room} from "../slices/messages"

const create = (room: Message) => ({
    roomId: room.roomId,
    messages: [room],
})


const createWithMultipleMessages = (room: Message[]) => ({
    roomId: room[0].roomId,
    messages: [...room],
})

export const add = (data: Room[], room: Message) => {
    const element = data.find(value => {

        return value.roomId === room.roomId;
    })

    if(element) {
        const updatedData = data.filter(value => value.roomId !== room.roomId)

        return [...updatedData, { ...element, messages: [...element.messages, room] }]
    }

    return [ ...data, create(room) ]
}

export const afterFetch = (data: Room[], messages: Message[]) => {
    const roomId = messages[0].roomId

    const element = data.find(value => value.roomId === roomId)

    if(element) {
        const updatedData = data.filter(value => value.roomId !== roomId)

        return [...updatedData, { ...element, messages: [...element.messages, ...messages] }]
    }

    return [ ...data, createWithMultipleMessages(messages)]
}
