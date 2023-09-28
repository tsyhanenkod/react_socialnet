import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.item}>
                <a href="/public">Profile</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a href="/public">Messages</a>
            </div>
            <div className={styles.item}>
                <a href="/public">Friends</a>
            </div>
            <div className={styles.item}>
                <a href="/public">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar
