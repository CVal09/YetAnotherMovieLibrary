

const API_KEY = import.meta.env.VITE_TMDB_API_KEY // Dichiarazione chiave API
const BASE_URL = "https://api.themoviedb.org/3" // URL di base
const apiSection = `api_key=${API_KEY}` // Sezione API
const page = "&page="
const language = "&language="
const italianLanguage = "it-IT"
const englishLanguage = "en-US"



// Ricerca contenuti in base al nome
export async function getContentByName(name) {
    const response = await fetch (`${BASE_URL}/search/multi?${apiSection}&query=${name}&${language}${englishLanguage}`)
    if (!response.ok) throw Error ("Nessun risultato trovato")
    return response.json()
}

// Contenuti popolari secondo il punteggio interno di TMDB
export async function getPopularItems(type) {
    const response = await fetch(`${BASE_URL}/${type}/popular?${apiSection}&${language}${englishLanguage}`)
    if (!response.ok) throw Error ("Nessun risultato trovato")
    return response.json()
}

// Contenuti in tendenza nell'ultima settimana
export async function getTrendingContent() {
    const response = await fetch(`${BASE_URL}/trending/all/week?${apiSection}&${language}${englishLanguage}`)
    if (!response.ok) throw Error ("Nessun risultato trovato")
    return response.json()
}

// Recupero serie tv per ID
export async function getShowById(id) {
    const mediaType = "tv"
    const response = await fetch (`${BASE_URL}/${mediaType}/${id}?${apiSection}&${language}${englishLanguage}`)
    if (!response.ok) throw Error ("Contenuto non trovato")
    return response.json()
}

// Ricerca film per ID
export async function getMovieById(id) {
    const mediaType = "movie"
    const response = await fetch (`${BASE_URL}/${mediaType}/${id}?${apiSection}&${language}${englishLanguage}`)
    if (!response.ok) throw Error ("Contenuto non trovato")
    return response.json()
}

// Elenco generi per film e serie tv
export async function getMediaGenres(type) {
    const response = await fetch (`${BASE_URL}/genre/${type}/list?${apiSection}`)
    if (!response.ok) throw Error ("Contenuto non trovato")
    return response.json()
}

// Film al cinema
export async function getNowPlaying() {
    const response = await fetch (`${BASE_URL}/movie/now_playing?${apiSection}`)
    if (!response.ok) throw Error ("Contenuto non trovato")
    return response.json()
}