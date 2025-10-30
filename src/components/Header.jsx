
import styles from '../styles/Header.module.css'
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'
import logo from '../assets/logo.png'


export default function Header() {
    return (
        <section className={styles.mainContainer}>
            <img src={logo} alt="" />
            <Navbar />
        </section>
    )
}