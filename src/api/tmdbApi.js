
// Chiave API
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const apiSection = `api_key=${API_KEY}`

// Gestione URL
const BASE_URL = "https://api.themoviedb.org/3"
const page = "&page="
const language = "&language="

// Gestione lingua
const italianLanguage = "it-IT"




// Serie TV

export async function getPopularShows() {
    const response = await fetch(`${BASE_URL}/tv/popular?${apiSection}`)
    if (!response.ok) throw Error ("Nessun risultato trovato")
    return response.json()
}

// Film

export async function getMovieByName(name) {
    const response = await fetch (`${BASE_URL}/search/movie?${apiSection}&query=${name}`)
    if (!response.ok) throw Error ("Nessun risultato trovato")
    return response.json()
}