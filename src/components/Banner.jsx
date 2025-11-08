
import styles from '../styles/components/Banner.module.css'


export default function Banner({ bannerImage, bannerTitle, bannerDescription}) {
    return (
        <section className={styles.mainContainer}>
            <img src={bannerImage} alt={bannerTitle} />
            <div className={styles.textContainer}>
                <h3>{bannerTitle}</h3>
                <p>{bannerDescription}</p>
            </div>
        </section>
    )
}