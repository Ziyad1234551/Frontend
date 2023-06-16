import {createSlice} from "@reduxjs/toolkit";
import data from "../../utils/constants/data";


const movieSlice = createSlice({
    name:"slice movie",
    initialState:{
        movies:data,
    },
    reducers:{
        addMovie(state,action) {
            state.movies.push(action.payload);
        },
    },
});

const {addMovie} = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export default moviesReducer;
export {addMovie};