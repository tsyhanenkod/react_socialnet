import styles from "./Posts.module.css";
import Post from "./Post/Post";
import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'



const Posts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        newPostElement.current.value = '';
    };

    let onPostChange = () => {
        let postText = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(postText))
    }



    return (
        <div className={styles.posts}>
            <textarea ref={newPostElement} onChange={() => onPostChange()} className={styles.textarea} value={props.newPostText} placeholder='write your text here'  />
            <button className={styles.add_post} onClick={() => addPost()}>Publish</button>

            {
                props.state.posts.map((post) => {
                    return <Post message={ post.text } likes={ post.likes }/>
                })
            }

            {/*<Post message={ props.message } likes={ props.likes }/>*/}
            {/*<Post message='Second message' likes='1'/>*/}
        </div>
    )
}

export default Posts