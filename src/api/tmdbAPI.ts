import axios from "axios";

const TMDB_API_BASE_URL:string = 'https://api.themoviedb.org';
const TMDB_API_VERSION:number = 3;
const TMDB_API_KEY:string = "46ee0c141c40a47a0687b4005ff79cbd";

export const tmdbAPI = axios.create({
  baseURL: TMDB_API_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  }
});