import { createSlice } from "@reduxjs/toolkit";
import { getGenres } from "../actions/getGenres";

type StaticMovieCategory = {
  id:string,
  name:string,
};
type Genre = {
  id:number,
  name:string,
}

interface GeneralState  {
  staticCategories: StaticMovieCategory[];
  genres: Genre[];
}

export const STATIC_MOVIE_CATEGORIES:StaticMovieCategory[] = [
  {id: 'popular', name: 'Popular'},
  {id: 'top_rated', name: 'Top Rated'},
  {id: 'upcoming', name: 'Upcoming'}
];

const INITIAL_STATE: GeneralState = {
  staticCategories: STATIC_MOVIE_CATEGORIES,
  genres: [],
};

export const generalSlice = createSlice({
  name: "general",
  initialState: INITIAL_STATE,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload.genres
    })
  },
})

// Action creators are generated for each case reducer function