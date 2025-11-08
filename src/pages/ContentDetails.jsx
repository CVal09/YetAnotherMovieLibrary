
import { useParams } from 'react-router-dom'
import styles from '../styles/pages/ContentDetails.module.css'
import { useEffect } from 'react'
import { getMovieById, getShowById } from '../api/tmdbApi'
import { useDispatch, useSelector } from 'react-redux'
import { manageContent } from '../features/tmdbSlice'


export default function ContentDetails() {

    const { id, type } = useParams()
    const dispatch = useDispatch()
    const result = useSelector((state) => state.tmdb.selectedItem)

    useEffect(() =>{
        const fetchData = async () => {
            const data = type === "movie" ? await getMovieById(id) : await getShowById(id)
            dispatch(manageContent(data))  
        }
        fetchData()
    },[id, type, dispatch])


    return (
        <section className={styles.mainContainer}>
            {result? (
                <div className={styles.infoBox}>
                    <img src={result.poster} alt={result.title} />
                    <div className={styles.textContainer}>
                        <h1>{result.title}</h1>
                        <p>{result.description}</p>
                        <div className={styles.ratingBox}>
                            <p>Punteggio medio: </p>
                            <span>{result.rating}</span>
                        </div>
                        
                    </div>
                </div>
            ): (<p>Caricamento in corso..</p>)}
        </section>
    )
}