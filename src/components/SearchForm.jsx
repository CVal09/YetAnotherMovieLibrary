import { useState } from "react"
import { getContentByName } from '../api/tmdbApi'
import styles from '../styles/components/SearchForm.module.css'
import { useDispatch } from 'react-redux'
import { searchOutput, fetchSearchResult } from "../features/tmdbSlice"
import { useNavigate } from "react-router-dom"


export default function SearchForm() {

    const [title, setTitle] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()


    async function handleSubmit(e) {
        e.preventDefault()
        if (!title.trim()) return
        dispatch(fetchSearchResult(title))
        setTitle("")
        navigate('/show-results')
    }

    return (
        <form action="" onSubmit={handleSubmit} className={styles.mainContainer}>
            <input type="text" placeholder="Find movies or shows..." value={title} onChange={e => setTitle(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

