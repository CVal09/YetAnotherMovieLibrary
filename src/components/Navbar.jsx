import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'


export default function Navbar() {
    return (
        <nav className={styles.mainContainer}>
            <Link to={'/'}>Home</Link>
        </nav>
    )
}