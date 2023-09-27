"use client";

import MovieList from "@/components/MovieList/MovieList";
import { getGenreMovies } from "@/redux/actions/getGenreMovies";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { STATIC_MOVIE_CATEGORIES } from "@/redux/slices/generalSlice";
import { RootState } from "@/redux/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  
  const movieList = useAppSelector((state:RootState) => state.genreMovieList );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const searchParams = useSearchParams();
  const paramsPage = Number(searchParams.get("page")) || 1;
  const paramsId = searchParams.get("id") || STATIC_MOVIE_CATEGORIES[0].name;
  const paramsCategoryName = searchParams.get("category") || STATIC_MOVIE_CATEGORIES[0].id;
  
  useEffect( () => {
      dispatch(getGenreMovies( {paramsId, paramsPage} ));
  }, [searchParams, dispatch ] )


  return (
    <div className='flex flex-col justify-center items-center w-full gap-4 p-4'>
      
      <div className='text-3xl my-4' >
        <h1>{paramsCategoryName.toUpperCase()} MOVIES</h1>
      </div>

      <MovieList movies={movieList.movies} />

      <div className='page-buttons'>
          {paramsPage>1 && (<button
          onClick={()=> {
            const newPageNumber =  Number(paramsPage) -1 ;
            // navigate(`/?category=${paramsCategoryName}&id=${paramsId}&page=${newPageNumber}`);
          } }
          >{`${paramsPage -1} <= ${paramsPage}`}</button>)}

          <button
            onClick={()=> {
              const newPageNumber =  Number(paramsPage) +1 ;
              // navigate(`/?category=${paramsCategoryName}&id=${paramsId}&page=${newPageNumber}`);
            } }
          >{`${paramsPage}  => ${paramsPage +1}`}</button>   
        </div>

    </div>
  );
};

export default Home;
