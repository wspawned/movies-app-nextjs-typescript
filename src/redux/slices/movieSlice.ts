import { createSlice } from "@reduxjs/toolkit";
import { getCredits, CastType } from "../actions/getCredits";
import { getMovie, MovieInfoType } from "../actions/getMovie";
import { getRecommendedMovies, RecommendedMovieType } from "../actions/getRecommendedMovies";

interface MovieState {
  movieInfo: MovieInfoType | {};
  recommendedMovies: RecommendedMovieType[] ;
  cast: CastType[] ;
}

const INITIAL_STATE: MovieState = {
  movieInfo: {},
  recommendedMovies: [],
  cast: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: INITIAL_STATE,
  reducers: {
    resetMovie: (state) => {
      state = INITIAL_STATE
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase( getMovie.fulfilled, (state, action) => {
      state.movieInfo = action.payload
    })
    builder
    .addCase( getRecommendedMovies.fulfilled, (state, action) => {
      state.recommendedMovies = action.payload.results
    })
    builder
    .addCase( getCredits.fulfilled, (state, action) => {
      state.cast = action.payload.cast
    })
  },
})

export const { resetMovie } = movieSlice.actions;