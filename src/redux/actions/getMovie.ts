import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";

export const getMovie = createAsyncThunk(
  "movie/get",
  async (id:number) => {
    const res = await tmdbAPI.get(`/3/movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    });
    return res.data;
  }
);


export interface MovieInfoType {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belongstocollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: Videos;
}

interface Videos {
  results: VideoResultType[];
}

export interface VideoResultType {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface Spokenlanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

interface Productioncompany {
  id: number;
  logo_path?: any;
  name: string;
  origin_country: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Belongstocollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}