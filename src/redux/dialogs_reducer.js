export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Den',
        },
        {
            id: 2,
            name: 'Vika',
        },
    ],
    newMessageText: '',
    messages: [
        {
            id: 1,
            text: 'Hello',
            userId: 1,
        },
        {
            id: 2,
            text: 'How are you?',
            userId: 1,
        },
        {
            id: 3,
            text: 'Hi! I`m fine.',
            userId: 2,
        },
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                text: state.newMessageText,
                userId: 1,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export const updateNewMessageTextActionCreator = (messageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: messageText,
    }
}

export default dialogsReducer;