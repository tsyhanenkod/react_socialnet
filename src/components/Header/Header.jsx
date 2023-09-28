import styles from "./Header.module.css";

const Header = ()=> {
    return (
        <header className={styles.header}>
            <a href="/public" className={styles.logo}>
                <h2 className={styles.logo_text}>Secret Chat</h2>
            </a>
            <div className={styles.login_nav}>
                <a href="/public" className={styles.log_button}>Log in</a>
                <p className={styles.between}>|</p>
                <a href="/public" className={styles.log_button}>Sign up</a>
            </div>
        </header>
    )
}

export default Header