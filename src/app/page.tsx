"use client";

import MovieList from "@/components/MovieList/MovieList";
import { getGenreMovies } from "@/redux/actions/getGenreMovies";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { STATIC_MOVIE_CATEGORIES } from "@/redux/slices/generalSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  
  const {movies, totalPages, moviesError, moviesIsLoading} = useAppSelector((state:RootState) => state.genreMovieList );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const searchParams = useSearchParams();
  const paramsPage = Number(searchParams.get("page")) || 1;
  const paramsId = searchParams.get("id") || STATIC_MOVIE_CATEGORIES[0].name;
  const paramsCategoryName = searchParams.get("category") || STATIC_MOVIE_CATEGORIES[0].id;
  
  useEffect( () => {
      dispatch(getGenreMovies( {paramsId, paramsPage} ));
  }, [searchParams, dispatch ] )

  useEffect(()=>{console.log(moviesIsLoading)},[moviesIsLoading])


  return (
    <>
    {
      movies.length === 0 
      ?
      <div className="flex flex-col w-screen h-screen justify-center items-center text-center" >
        <h2 className='text-rose-300 text-xl' >Loading...</h2>
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
      </div> 
      :
      <div className='flex flex-col justify-center items-center w-full gap-4 p-4'>
        
        <h1 className='text-3xl my-4' >{paramsCategoryName.toUpperCase()} MOVIES</h1>

      <MovieList movies={movies} />

      <div className='flex w-full justify-between py-4 px-2 md:px-8'>
          {paramsPage > 1 ? (
          <Link
            href={`/?category=${paramsCategoryName}&id=${paramsId}&page=${Number(paramsPage) - 1}`}
            passHref
          >
            <button
              className="p-2 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 rounded-md shadow-xl text-white hover:shadow-2xl transition-transform transform hover:scale-105"

            >{`Prev Page >`}</button>
          </Link>
          ) :
          <button className="" > {` `} </button>
          }

          <button
            className="p-2 bg-teal-400 rounded-md shadow-xl px-6 text-stone-700 hover:cursor-default"
          >
            {`${Number(paramsPage)}`}
          </button>

          { totalPages && paramsPage < totalPages && (
            <Link
            href={`/?category=${paramsCategoryName}&id=${paramsId}&page=${Number(paramsPage) + 1}`}
            passHref
          >
            <button
              className="p-2 bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 rounded-md shadow-xl text-white hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              {`Next Page >`}
            </button>
          </Link>
          )}
        
      </div>

    </div>
    }
    </>
  );
};

export default Home;
