import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";


export const getPersonMovies = createAsyncThunk(
  'getPersonMovies/get',
  async (id:number) => {
    const res = await tmdbAPI.get(`/3/discover/movie`,{
      params: {
        with_cast: id,
        page: 1,
      }
    });
    return res.data;
  }
);


export interface PersonMoviesApiType {
  page: number;
  results: PersonMovieType[];
  total_pages: number;
  total_results: number;
};

export interface PersonMovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
