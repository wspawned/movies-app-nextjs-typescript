"use client"
import type { RecommendedMovieType } from "../../redux/actions/getRecommendedMovies";
import MovieList from "../MovieList/MovieList";

const RecommendedMovieList:React.FC<{movies:RecommendedMovieType[]}> = ({movies}) => {
  return (
    <>
    
    <h1 className='text-3xl my-4' >RECOMMENDED MOVIES</h1>
    <MovieList movies={movies}/>
    </>
  )
}

export default RecommendedMovieList;