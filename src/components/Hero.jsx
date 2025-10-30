import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styles from '../styles/Hero.module.css'
import SearchForm from '../components/SearchForm'


export default function Hero() {

    const data = useSelector((state) => state.tmdb.popularShowList)

    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (data.length > 0) {
            const randomIndex = Math.floor(Math.random()*data.length)
            setIndex(randomIndex)
        }  
    },[data])

    return (
        <section style={{backgroundImage: `url(${data.length === 0 ? "" : data[index].backdrop})`}} className={styles.mainContainer}>
            <div>
                <h3><span>Yet Another</span></h3>
                <h1>Movie Library</h1>
            </div>
            <SearchForm />
        </section>
    )
}

