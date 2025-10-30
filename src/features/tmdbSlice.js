
import { createSlice } from '@reduxjs/toolkit'


const tmdbSlice = createSlice({
    name: 'tmdb',
    initialState: {
        popularShowList: []
    },
    reducers: {
        manageContent: (state, action) => {
            const receivedData = action.payload
            for (let item of receivedData) {
                const itemToAdd = {
                    id: item.id,
                    title: item.name || item.title,
                    description: item.overview,
                    poster: item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : null,
                    backdrop: item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : null,
                }
                state.popularShowList.push(itemToAdd)
            }
        }
    }
})

export const { manageContent } = tmdbSlice.actions
export default tmdbSlice.reducer