import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";


export const getGenres = createAsyncThunk(
  'genres/get',
  async () => {
    const res = await tmdbAPI.get("/3/genre/movie/list");
    return res.data
  }
);