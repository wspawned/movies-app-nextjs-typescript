import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbAPI } from "../../api/tmdbAPI";

export const getCredits = createAsyncThunk(
  "credits/get",
  async (id:number) => {
      const res = await tmdbAPI.get(`/3/movie/${id}/credits`, {
        params: {

        }
      });
      return res.data;
  }
);



interface Credits {
  id: number;
  cast: CastType[];
  crew: Crew[];
}

interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface CastType {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}