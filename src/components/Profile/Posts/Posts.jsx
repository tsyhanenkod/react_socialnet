import styles from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={styles.posts}>
            <textarea className={styles.textarea} placeholder='write your text here'></textarea>
            <button className={styles.add_post}>Publish</button>
            <Post message='Hello' likes='10'/>
            <Post message='Second message' likes='1'/>
        </div>
    )
}

export default Posts