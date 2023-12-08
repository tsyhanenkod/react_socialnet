import {rerenderEntireTree} from "../render";

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
}

export let addNewPost = () => {
    let newPost = {
        id: 3,
        text: state.profilePage.newPostText,
        likes: 11,
    };

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state, addNewPost, updateNewPostText)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state, addNewPost, updateNewPostText)
}

export default state;