import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive ? `${styles.active}` : ''}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/messages" className={({ isActive }) => isActive ? `${styles.active}` : ''}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/friends" className={({ isActive }) => isActive ? `${styles.active}` : ''}>Friends</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings" className={({ isActive }) => isActive ? `${styles.active}` : ''}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
