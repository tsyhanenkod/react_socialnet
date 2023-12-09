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
            messages: [
                {
                    id: 1,
                    message: 'Hello',
                },
                {
                    id: 2,
                    message: 'How are you?',
                },
                {
                    id: 3,
                    message: 'Hi! I`m fine.',
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
        }
    }
}

export default store;