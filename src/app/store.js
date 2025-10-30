
import { configureStore } from "@reduxjs/toolkit";
import tmdbReducer from "../features/tmdbSlice";

export const store = configureStore({
    reducer: {
        tmdb: tmdbReducer
    }
})