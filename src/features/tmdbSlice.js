
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getContentByName, getPopularItems, getMediaGenres, getNowPlaying } from '../api/tmdbApi'
import { TMDB_IMAGE_BASE_URL, FALLBACK_IMAGE, POSTER_SIZE, BACKGROUND_SIZE } from '../config/config.js'

const newItem = (item, type = null) => ({
    type: type,
    id: item.id,
    title: item.name || item.title,
    description: item.overview,
    poster: item.poster_path ? `${TMDB_IMAGE_BASE_URL}/${POSTER_SIZE}${item.poster_path}` : `${FALLBACK_IMAGE}`,
    backdrop: item.backdrop_path ? `${TMDB_IMAGE_BASE_URL}/${BACKGROUND_SIZE}${item.backdrop_path}` : `${FALLBACK_IMAGE}`,
    rating: Number.isFinite(item.vote_average) ? item.vote_average.toFixed(1) : null
})

const newGenre = (item, type) => ({
    type: type,
    id: item.id,
    name: item.name
})

export const fetchSearchResult = createAsyncThunk('tmdb/fetchSearchResult', async ( title, { rejectWithValue } ) => {
    try {
        const data = await getContentByName(title)
        if (!data.results || data.results.length === 0) return rejectWithValue("Nessun contenuto trovato") 
        return data.results.filter(item => item.media_type === "movie" || item.media_type === "tv")
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const fetchPopular = createAsyncThunk('tmdb/fetchPopular', async (_, { rejectWithValue }) => {
    try {
        const showData = await getPopularItems("tv")
        const popularShows = showData.results
        const movieData = await getPopularItems("movie")
        const popularMovies = movieData.results
        return [popularMovies, popularShows]
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const fetchMediaGenres = createAsyncThunk('tmdb/fetchMediaGenres', async (_, { rejectWithValue }) => {
    try {
        const movieData = await getMediaGenres("movie")
        const showData = await getMediaGenres("tv")
        const movieGenres = movieData.genres
        const showGenres = showData.genres
        return [movieGenres, showGenres]
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const fetchNowPlaying = createAsyncThunk('tmdb/fetchNowPlaying', async (_, { rejectWithValue }) => {
    try {
        const data = await(getNowPlaying())
        return data.results
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


const tmdbSlice = createSlice({
    name: 'tmdb',
    initialState: {
        isLoading: false,
        error: null,
        selectedItem: {},
        searchResults: [],
        popularItems: [],
        nowPlayingMovies: [],
        mediaGenres: []
    },
    reducers: {
        manageContent: (state, action) => {
            const item = action.payload.results || action.payload
            const isValid = (
                item !== null &&
                typeof item === 'object' &&
                !Array.isArray(item)
            )
            if (isValid) {
                state.selectedItem = newItem(item)
            } else {
                state.selectedItem = {}
            }
        },
        resetSearch: (state) => {
            state.searchResults = []
            state.selectedItem = {}
        }
    },
    extraReducers: (builder) => {
        builder
        // SearchResult - ricerca e gestione contenuti per nome
            .addCase(fetchSearchResult.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.searchResults = action.payload.map(item => (
                    newItem(item, item.media_type)
                ))
            })
            .addCase(fetchSearchResult.pending, (state) => {
                state.isLoading = true
                state.error = null

            })
            .addCase(fetchSearchResult.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || "Errore nella ricerca"
            })
        // popularItems - gestione ed organizzazione dei contenuti recuperati
            .addCase(fetchPopular.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.popularItems = [
                    ...action.payload[0].map(item =>
                        newItem(item, "movie")
                    ),
                    ...action.payload[1].map(item =>
                        newItem(item, "tv")
                    )
                ]
            })
            .addCase(fetchPopular.pending, (state) => {
                state.isLoading = true
                state.error = null

            })
            .addCase(fetchPopular.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload || "Errore nella ricerca"
            })
        // mediaGenres - estrazione dei generi per serie tv e film
            .addCase(fetchMediaGenres.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.mediaGenres = [
                    ...action.payload[0].map(item => 
                        newGenre(item, "movie")
                    ),
                    ...action.payload[1].map(item => 
                        newGenre(item, "tv")
                    )
                ]
        })
        // NowPlaying
        .addCase(fetchNowPlaying.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            const fetchedData = action.payload
            state.nowPlayingMovies = fetchedData.map(item => 
                    newItem(item, "movie")
                )
        })
        .addCase(fetchNowPlaying.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(fetchNowPlaying.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload || "Errore nella ricerca"
        })
    }
})

export const { searchOutput, manageContent, resetSearch } = tmdbSlice.actions
export default tmdbSlice.reducer