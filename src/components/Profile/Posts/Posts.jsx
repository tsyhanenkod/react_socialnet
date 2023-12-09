import styles from "./Posts.module.css";
import Post from "./Post/Post";
import React from 'react'

const Posts = (props) => {
    let newPostElement = React.createRef();

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let postText = newPostElement.current.value;
        props.onPostChange(postText);
    }

    return (
        <div className={styles.posts}>
            <textarea ref={newPostElement} onChange={() => onPostChange()} className={styles.textarea} value={props.newPostText} placeholder='write your text here'  />
            <button className={styles.add_post} onClick={() => addPost()}>Publish</button>

            {
                props.posts.map((post) => {
                    return <Post message={ post.text } likes={ post.likes }/>
                })
            }
        </div>
    )
}

export default Posts