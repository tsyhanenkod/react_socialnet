const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                text: state.newPostText,
                likes: 11,
            };
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state
        default:
            return state

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

export default profileReducer;