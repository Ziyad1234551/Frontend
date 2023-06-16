import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "../MovieSlice/MovieSlice";

const store = configureStore({
    reducer:{
        movies:moviesReducer,
    },
});
export default store