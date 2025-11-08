import { Link } from 'react-router-dom'
import styles from '../styles/components/Navbar.module.css'
import { useDispatch } from 'react-redux'
import { resetSearch } from '../features/tmdbSlice'


export default function Navbar() {

    const dispatch = useDispatch()

    return (
        <nav className={styles.mainContainer}>
            <Link to={'/'} onClick={() => dispatch(resetSearch())}>Home</Link>
        </nav>
    )
}