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
  genresIsLoading: boolean;
  genresError: null | any;
}

export const STATIC_MOVIE_CATEGORIES:StaticMovieCategory[] = [
  {id: 'popular', name: 'Popular'},
  {id: 'top_rated', name: 'Top Rated'},
  {id: 'upcoming', name: 'Upcoming'}
];

const INITIAL_STATE: GeneralState = {
  staticCategories: STATIC_MOVIE_CATEGORIES,
  genres: [],
  genresIsLoading: false,
  genresError: null,
};

export const generalSlice = createSlice({
  name: "general",
  initialState: INITIAL_STATE,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(getGenres.pending, (state, action) => {
      state.genres = [];
      state.genresIsLoading = true;
      state.genresError = null;
    })
    .addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload.genres;
      state.genresIsLoading = false;
      state.genresError = null;
    })
    .addCase(getGenres.rejected, (state, action) => {
      state.genres = [];
      state.genresIsLoading = false;
      state.genresError = action.payload;
    })
  },
})

// Action creators are generated for each case reducer function