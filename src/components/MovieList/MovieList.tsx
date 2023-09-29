"use client";

import type { GenreMoviesType } from '../../redux/actions/getGenreMovies';
import type { RecommendedMovieType } from '../../redux/actions/getRecommendedMovies';
import { PersonMovieType } from '../../redux/actions/getPersonMovies';
import MovieListItem from './MovieListItem/MovieListItem';

const MovieList:React.FC<{movies: GenreMoviesType[] | RecommendedMovieType[] | PersonMovieType[], title: string }> = ( {movies, title} ) => {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-4' >
      <h1 className='text-rose-300 text-xl md:text-3xl font-bold my-4 drop-shadow-xl' >{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 text-slate-200">
        {movies.map((movie, index) => {
          return (

            <MovieListItem
              movie={movie}
              key={index}
            />

          );
        })}
      </div>
    </div>
  )
};

export default MovieList;