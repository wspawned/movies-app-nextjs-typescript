"use client"
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getMovie } from "../../redux/actions/getMovie";
import { getRecommendedMovies } from "../../redux/actions/getRecommendedMovies";
import { getCredits } from "../../redux/actions/getCredits";
import { useSearchParams } from 'next/navigation';
import RecommendedMovieList from '@/components/RecommendedMovieList/RecommendedMovieList';
import MovieInfo from '@/components/MovieInfo/MovieInfo';

const Movie = () => {

  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  const dispatch = useAppDispatch();
  const recommendedMovies = useAppSelector((state) => state.movie.recommendedMovies );
  
  useEffect(  () => {
    dispatch( getMovie(id) );
    dispatch( getRecommendedMovies(id) );
    dispatch( getCredits(id) );
  },[dispatch, id ])


  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 p-4 md:px-40">
      
      <MovieInfo/>
      <RecommendedMovieList movies  ={recommendedMovies} />
    </div>
  );
};

export default Movie;