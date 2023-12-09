const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store ={
    _state: {
        chatsPage: {
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
        },
        profilePage: {
            newPostText: '',
            posts:[
                {
                    id: 1,
                    text: 'Bla Bla Bla',
                    likes: 12,
                },
                {
                    id: 2,
                    text: 'Hello',
                    likes: 3,
                },
            ],
        }
    },
    getState() {
        return this._state
    },
    callSubscriber () {},

    subscribe (observer) {
        this.callSubscriber = observer
    },

    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 3,
                text: this._state.profilePage.newPostText,
                likes: 11,
            };
            this._state.profilePage.posts.push(newPost)
            this.callSubscriber(this._state)
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.text;
            this.callSubscriber(this._state)
        }else if (action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id: 4,
                text: this._state.chatsPage.newMessageText,
                userId: 1,
            }
            this._state.chatsPage.messages.push(newMessage)
            this.callSubscriber(this._state)
        }else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.chatsPage.newMessageText = action.text;
            this.callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextActionCreator = (postText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: postText,
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

export default store;