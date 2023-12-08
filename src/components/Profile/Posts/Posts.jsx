import styles from "./Posts.module.css";
import Post from "./Post/Post";
import React from 'react'

const Posts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let postText = newPostElement.current.value;
        props.addNewPost(postText);
        props.updateNewPostText('')
    };

    let onPostChange = () => {
        let postText = newPostElement.current.value;
        props.updateNewPostText(postText)
    }



    return (
        <div className={styles.posts}>
            <textarea ref={newPostElement} onChange={() => onPostChange()} className={styles.textarea} value={props.state.newPostText} placeholder='write your text here'  />
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