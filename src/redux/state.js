const state = {
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
}

export default state;