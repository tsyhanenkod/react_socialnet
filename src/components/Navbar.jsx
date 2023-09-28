import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.item}>
                <a href="/">Profile</a>
            </div>
            <div className={styles.item}>
                <a href="/">Messages</a>
            </div>
            <div className={styles.item}>
                <a href="/">Friends</a>
            </div>
            <div className={styles.item}>
                <a href="/">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar
