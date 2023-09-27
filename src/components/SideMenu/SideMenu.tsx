"use client"
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import { getGenres } from '@/redux/actions/getGenres';
import { usePathname, useRouter } from 'next/navigation';


function SideMenu() {

  const genres = useAppSelector((state: RootState) => state.general.genres);
  const staticCategories = useAppSelector((state: RootState) => state.general.staticCategories);

  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch])

  const router = useRouter();

  return (
    <div className="hidden md:block flex-col h-screen bg-neutral-800 w-64 overflow-hidden">
      <style>
        {`
      .overflow-auto::-webkit-scrollbar {
        width: 0.5rem;
      }

      .overflow-auto::-webkit-scrollbar-thumb {
        background: transparent;
      }

      .overflow-auto::-webkit-scrollbar-track {
        background: transparent;
      }
    `}
      </style>

      <div className='overflow-auto'>
        {staticCategories &&
          <div className='flex flex-col gap-2 p-4' >
            <h2 className='text-rose-300 text-xl' >Discover</h2>
            {staticCategories.map((category) => {
              return (
                <div className='text-slate-200 hover:text-rose-300 hover:bg-neutral-400 hover:cursor-pointer p-2 rounded-md'
                  onClick={() => {
                    router.push(`/?category=${category.name}&id=${category.id}&page=1`);
                  }}
                  key={category.id}
                >
                  {category.name}
                </div>
              );
            })}
          </div>
        }

        {genres &&
          <div className='flex flex-col gap-2 p-4' >
            <h2 className='text-rose-300 text-xl' >Genres</h2>
            {genres.map((genre) => {
              return (
                <div className='text-slate-200 hover:text-rose-300 hover:bg-neutral-400 hover:cursor-pointer p-2 rounded-md'
                  onClick={() => {
                    router.push(`/?category=${genre.name}&id=${genre.id}&page=1`);
                  }}
                  key={genre.id}
                >
                  {genre.name}
                </div>
              );
            })}
          </div>
        }
      </div>
      
    </div>
  );
}

export default SideMenu;