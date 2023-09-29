import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";


export const getPerson = createAsyncThunk(
  'person/get',
  async (id:number) => {
    const res = await tmdbAPI.get(`/3/person/${id}`);
    return res.data
  }
);


export interface PersonType {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday?: any;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};