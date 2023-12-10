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
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text,
            }
        case ADD_MESSAGE:
            let newText = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, text: newText, userId: 1}],
            }

        default: {
            return state
        }

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