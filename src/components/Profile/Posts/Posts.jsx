import styles from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
    return (
        <div className={styles.posts}>
            <textarea className={styles.textarea} placeholder='write your text here'></textarea>
            <button className={styles.add_post}>Publish</button>

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