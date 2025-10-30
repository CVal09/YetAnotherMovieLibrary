import { useEffect } from "react"
import { getPopularShows } from '../api/tmdbApi'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SearchForm from "../components/SearchForm"
import { useDispatch } from "react-redux"
import { manageContent } from "../features/tmdbSlice"
import ContentView from "../components/ContentView"
import styles from '../styles/Home.module.css'
import { useSelector } from "react-redux"


export default function Home() {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.tmdb.popularShowList)

    useEffect(() => {
        const fetchData = async () => {
            const popularShowsData = await getPopularShows()
            dispatch(manageContent(popularShowsData.results))
        }
        fetchData()
    },[])

    return (
        <section className={styles.mainContainer}>
            <Hero />
            <ContentView dataSet={data} sectionTitle={"Ultime uscite"}/>
        </section>
    )
}