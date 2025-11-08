
import styles from '../styles/components/Header.module.css'
import Navbar from '../components/Navbar'
import logo from '../assets/logo.png'


export default function Header() {
    return (
        <section className={styles.mainContainer}>
            <img src={logo} alt="" />
            <Navbar />
        </section>
    )
}