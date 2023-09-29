"use client"

import { PersonMovieType } from "../../redux/actions/getPersonMovies";
import MovieList from "../MovieList/MovieList";

const PersonMovieList:React.FC<{movies:PersonMovieType[]}> = ({movies}) => {
  return (
    <>
      <MovieList movies={movies} title="PERFORMS IN" />
    </>
  )
};

export default PersonMovieList;