import styles from "./Profile.module.css";
import Posts from './Posts/Posts'

const Profile = (props) =>{
    return (
        <div className={styles.profile}>
            <div className={styles.profile_info}>
                <div className={styles.main_info}>
                    <div className={styles.main_image}></div>
                    <div className={styles.main_text}>
                        <h1 className={styles.name}>Den</h1>
                        <a href="/" className={styles.username}>@usernmae</a>
                        <div className={styles.more_info}>
                            <div className={styles.infotext}>Birthday:  </div>
                            <div className={styles.infotext}>Email:</div>
                        </div>
                    </div>
                    <p className={styles.status}>last seen at 00:00 AM</p>
                </div>
            </div>
             <Posts state={ props.state }/>
        </div>
    )
}

export default Profile;