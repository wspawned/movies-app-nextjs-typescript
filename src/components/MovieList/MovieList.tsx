"use client";

import type { GenreMoviesType } from '../../redux/actions/getGenreMovies';
import type { RecommendedMovieType } from '../../redux/actions/getRecommendedMovies';
import { PersonMovieType } from '../../redux/actions/getPersonMovies';
import MovieListItem from './MovieListItem/MovieListItem';

const MovieList:React.FC<{movies: GenreMoviesType[] | RecommendedMovieType[] | PersonMovieType[] }> = ( {movies} ) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    
    {movies.map((movie, index) => {
      return (
          
          <MovieListItem
          movie = {movie}
          key = {index}
          />
        
      );
    })}
  </div>
  )
};

export default MovieList;