import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.post_body}>
                <p className={styles.post_text}>{props.message}</p>
            </div>

            <div className={styles.post_btns}>
                <div className={styles.btns_block}>
                    <div className={`${styles.post_btn} ${styles.likes}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                        <p>{props.likes}</p>
                    </div>
                    <div className={`${styles.post_btn} ${styles.comments}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-chat-square-dots-fill" viewBox="0 0 16 16">
                            <path
                                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        <p>12</p>
                    </div>
                    <div className={`${styles.post_btn} ${styles.reposts}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-send-fill" viewBox="0 0 16 16">
                            <path
                                d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                        </svg>
                        <p>3</p>
                    </div>
                </div>
                <p className={styles.postdate}>21.12.2022</p>
            </div>
        </div>
    )
}

export default Post;