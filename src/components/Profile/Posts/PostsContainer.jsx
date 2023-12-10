import Posts from "./Posts";
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer'
import StoreContext from '../../../storeContext'

const PostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store) => {

                let state = store.getState()
                const onPostChange = (postText) => {
                    store.dispatch(updateNewPostTextActionCreator(postText))
                }

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                return <Posts addPost={addPost}
                       onPostChange={onPostChange}
                       posts={state.profilePage.posts}
                       newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default PostsContainer