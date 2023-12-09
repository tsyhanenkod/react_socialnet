import Posts from "./Posts";
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer'

const PostsContainer = (props) => {
    let state = props.store.getState()
    const onPostChange = (postText) => {
        props.store.dispatch(updateNewPostTextActionCreator(postText))
    }

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    console.log(props.store)
    return (
        <Posts addPost={addPost}
               onPostChange={onPostChange}
               posts={state.profilePage.posts}
               newPostText={state.profilePage.newPostText}/>
    )
}

export default PostsContainer