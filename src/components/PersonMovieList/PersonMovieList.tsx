"use client"

import { PersonMovieType } from "../../redux/actions/getPersonMovies";
import MovieList from "../MovieList/MovieList";

const PersonMovieList:React.FC<{movies:PersonMovieType[]}> = ({movies}) => {
  return (
    <>
      <h1 className='text-3xl my-4' >PERFORMS IN</h1>
      <MovieList movies={movies}/>
    </>
  )
};

export default PersonMovieList;