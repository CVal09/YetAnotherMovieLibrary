
import { Link } from 'react-router-dom'
import styles from '../styles//pages/ShowResults.module.css'
import { useSelector } from 'react-redux'
import Banner from '../components/Banner'


export default function ShowResults() {

    const data = useSelector((state) => state.tmdb.searchResults)

    return (
        <section className={styles.mainContainer}>
            { data.length > 0 ? data.map(item => <Link to={`/content/${item.type}/${item.id}`} key={item.id}><Banner bannerImage={item.poster} bannerTitle={item.title} bannerDescription={item.description}/></Link>) : <p>Nessun risultato trovato.</p> }
        </section>
    )

}