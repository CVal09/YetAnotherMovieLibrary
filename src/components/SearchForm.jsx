import { useState } from "react"
import { getMovieByName } from '../api/tmdbApi'
import styles from '../styles/SearchForm.module.css'


export default function SearchForm() {

    const [title, setTitle] = useState("")


    async function handleSubmit(e) {
        e.preventDefault()
        const data = await getMovieByName(title)
        setTitle("")
    }

    return (
        <form action="" onSubmit={handleSubmit} className={styles.mainContainer}>
            <input type="text" placeholder="Inserisci il nome del film" value={title} onChange={e => setTitle(e.target.value)}/>
            <button type="submit">Cerca</button>
        </form>
    )
}

