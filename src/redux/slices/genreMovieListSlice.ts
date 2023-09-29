import { createSlice } from "@reduxjs/toolkit";
import { getGenreMovies } from "../actions/getGenreMovies";
import type { GenreMoviesType } from "../actions/getGenreMovies";

interface GenreMoviesState {
  movies: GenreMoviesType[];
  totalPages: null | number;
  moviesIsLoading: boolean;
  moviesError: null | any ;
}

const INITIAL_STATE:GenreMoviesState = {
  movies: [],
  totalPages: null,
  moviesIsLoading: false,
  moviesError: null,
};

export const genreMovieListSlice = createSlice({
  name: "movieList",
  initialState: INITIAL_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(getGenreMovies.fulfilled, (state, action) => {
      state.movies = action.payload.results;
      state.totalPages = action.payload.total_pages;
      state.moviesIsLoading = false;
      state.moviesError = null;
    })
    .addCase(getGenreMovies.pending, (state, action) => {
      state.movies = [];
      state.totalPages = null;
      state.moviesIsLoading = true;
      state.moviesError = null;
    })
    .addCase(getGenreMovies.rejected, (state, action) => {
      state.movies = [];
      state.totalPages = null;
      state.moviesIsLoading = false;
      state.moviesError = action.payload;
    })
  },
});