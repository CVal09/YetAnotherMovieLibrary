
import styles from '../styles/Card.module.css'


export default function Card({ cardImage, cardTitle}) {
    return (
        <section className={styles.mainContainer}>
            <img src={cardImage} alt={cardTitle} />
            <p>{cardTitle}</p>
        </section>
    )
}