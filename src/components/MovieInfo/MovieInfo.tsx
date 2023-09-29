"use client"

import { useAppSelector } from "../../redux/hooks/hooks";
import Cast from "./Cast/Cast";
import { MovieInfoType } from "../../redux/actions/getMovie";
import Image from "next/image";
import Link from "next/link";
import Trailer from "./Trailer/Trailer";
// import Trailer from "./Trailer";

const MovieInfo = () => {

  const movie = useAppSelector(state => state.movie);

  const cast = movie.cast;
  const info = movie.movieInfo as MovieInfoType;
  
  const { title, tagline, runtime, release_date, genres, overview, homepage, imdb_id, poster_path, videos } = info;
  const IMDB_base_url = "https://www.imdb.com/title/";
  const base_url:string = 'https://image.tmdb.org/t/p/';

  return (
    <>
    <div className="flex flex-col md:flex-row w-full justify-center items-center pb-6 pt-0 md:pt-32 gap-12">
    {/* <div className="flex flex-col md:flex-row w-full justify-center items-center px-0 md:px-36 pb-6 pt-0 md:pt-32 gap-12"> */}

      <div className="flex w-full md:w-1/3" >
        <Image
          src={`${base_url}w342${poster_path}`}
          alt={`${title} Poster`}
          width={342}
          height={513}
        />
      </div>

      <div className="flex flex-col w-full h-full gap-4">
        
        <div className="flex flex-col gap-2 text-slate-200 pb-2 border-b-orange-400 border-b-2" >
          <h1 className='text-3xl font-bold' >{`  ${title?.toUpperCase()}  `}</h1>
          <p className='text-2xl' >{`  ${tagline?.toUpperCase()}  `}</p>

          <p>{`  ${runtime} min / ${release_date}  `}</p>
        </div>

        <div className="flex flex-col gap-2 text-slate-200">
          <h3 className='text-lg font-bold' >GENRES</h3>
          <div className="flex gap-6" >
          {genres
            ? genres.map((genre: any) => {
              return (
                <Link
                href={`/?category=${genre.name}&id=${genre.id}&page=1`}
                passHref
                key={genre.id}
                >
                <p
                className="text-slate-200 bg-emerald-700 rounded-md py-1 px-2"
                
                >{genre.name}</p>
                </Link>
              );
            })
            : null}
          </div>
        </div>

        <div className="flex flex-col w-full gap-2 text-slate-200">
        <h3 className='text-lg font-bold' >ABOUT</h3>
        <p >{`  ${overview}  `}</p>

        
        <Cast cast={cast}
        base_url={base_url} 
        />

          

        </div>
        
      </div>
    </div>
    <div className="flex w-full md:w-3/4 justify-around border-b-orange-400 pb-6 border-b-2 mx-24">
            <Link
              href={`${homepage}`}
              passHref
            >
              <button className="text-slate-300 font-bold hover:text-black hover:decoration-orange-400 decoration-2 hover:cursor-pointer underline underline-offset-4 px-4 py-2 text-lg">Website</button>
            </Link>
            <Link
              href={`${IMDB_base_url + imdb_id}`}
              passHref
            >
              <button className="text-slate-300 font-bold hover:text-black hover:decoration-orange-400 decoration-2 hover:cursor-pointer underline underline-offset-4 px-4 py-2 text-lg"> IMDB</button></Link>
            <Trailer videos={videos?.results} />
          </div>
    </>
  )
}

export default MovieInfo;