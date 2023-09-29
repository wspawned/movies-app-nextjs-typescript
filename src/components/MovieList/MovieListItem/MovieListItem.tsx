"use client";

import { useAppDispatch } from '../../../redux/hooks/hooks';
import { resetMovie } from '../../../redux/slices/movieSlice';
import type { GenreMoviesType } from '../../../redux/actions/getGenreMovies';
import type { RecommendedMovieType } from '../../../redux/actions/getRecommendedMovies';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const MovieListItem:React.FC<{movie:GenreMoviesType|RecommendedMovieType}> = ( {movie} ) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const base_url = process.env.NEXT_PUBLIC_TMDB_IMG_BASE_URL;
  const { title, poster_path, vote_average, vote_count, id } = movie;

  const W342H513 = {
    WIDTH: "342",
    HEIGHT: "513",
  }

  return (
    <Link
      href={`/movie/?id=${id}`}
      passHref
    >
      <div className="flex flex-col justify-center items-center text-center transform scale-100 hover:scale-105 transition-transform ease-in-out duration-300 "
        onClick={() => {
          dispatch(resetMovie());
        }}
      >
        <p className="h-8 px-2 w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
          {title}
        </p>

        <Image
        className='rounded-2xl'
          src={`${base_url}w${W342H513.WIDTH}${poster_path}`}
          alt={`${title} Poster`}
          width={342}
          height={513}
        />

      </div>
    </Link>
  );
};

export default MovieListItem;