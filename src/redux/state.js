import profileReducer from './profile_reducer'
import dialogsReducer from './dialogs_reducer'

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.chatsPage = dialogsReducer(this._state.chatsPage, action)

        this.callSubscriber(this._state)
    }
}

export default store;