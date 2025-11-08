import { useEffect, useState } from "react"
import Hero from "../components/Hero"
import { useDispatch } from "react-redux"
import { fetchMediaGenres, fetchPopular, fetchNowPlaying } from "../features/tmdbSlice"
import ContentView from "../components/ContentView"
import styles from '../styles/pages/Home.module.css'
import { useSelector } from "react-redux"
import GenreList from "../components/GenreList"


export default function Home() {

    const dispatch = useDispatch()
    const popularItems = useSelector((state) => state.tmdb.popularItems)
    const mediaGenres = useSelector((state) => state.tmdb.mediaGenres)
    const nowPlaying = useSelector((state) => state.tmdb.nowPlayingMovies)

    useEffect(() => {
        if (!popularItems.length) dispatch(fetchPopular())
        if (!mediaGenres.length) dispatch(fetchMediaGenres())
        if (!mediaGenres.length) dispatch(fetchNowPlaying())
    },[])

    return (
        <section className={styles.mainContainer}>
            <Hero />
            <h1>Prova</h1>
            <ContentView dataSet={nowPlaying} sectionTitle={"Now Playing"} contentType={"movie"}/>
            <ContentView dataSet={popularItems.filter(content => content.type === "movie")} sectionTitle={"Popular Movies"} contentType={"movie"}/>
            <ContentView dataSet={popularItems.filter(content => content.type === "tv")} sectionTitle={"Popolar Shows"} contentType={"tv"}/>
        </section>
    )
}