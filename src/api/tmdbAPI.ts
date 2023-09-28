import axios from "axios";

const TMDB_API_BASE_URL:string = process.env.NEXT_PUBLIC_BASE_URL as string;
const TMDB_API_VERSION:number = 3;
const TMDB_API_KEY:string = process.env.NEXT_PUBLIC_API_KEY as string;

export const tmdbAPI = axios.create({
  baseURL: TMDB_API_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  }
});