import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";
import { STATIC_MOVIE_CATEGORIES } from "../slices/generalSlice";

const staticIds = STATIC_MOVIE_CATEGORIES.map((elm)=> {return elm.id} );

export const getGenreMovies = createAsyncThunk(
  "genreMovies/get",
  async ({paramsId, paramsPage}:{paramsId:string, paramsPage:number} ) => {
    
    if(staticIds.includes(paramsId)) {
      const res = await tmdbAPI.get(`/3/movie/${paramsId}`, {
        params: {
          page: paramsPage,
        }
      });
      return res.data.results;
    } else {
      const res = await tmdbAPI.get("/3/discover/movie/", {
        params: {
          with_genres: paramsId,
          page: paramsPage,
        }
      });
      return res.data.results;
    }
  }
);


export type GenreMoviesApiResponse = {
  page: number;
  results: GenreMoviesType[];
  total_pages: number;
  total_results: number;
}

export type GenreMoviesType = {
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
}