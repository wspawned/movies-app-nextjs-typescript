"use client"
import type { RecommendedMovieType } from "../../redux/actions/getRecommendedMovies";
import MovieList from "../MovieList/MovieList";

const RecommendedMovieList:React.FC<{movies:RecommendedMovieType[]}> = ({movies}) => {
  return (
    <>
    <MovieList movies={movies} title="RECOMMENDED MOVIES"/>
    </>
  )
}

export default RecommendedMovieList;