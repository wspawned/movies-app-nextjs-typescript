"use client"
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import { getGenres } from '@/redux/actions/getGenres';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';


function SideMenuMobil() {

  const {genres, genresIsLoading, genresError} = useAppSelector((state: RootState) => state.general);
  const staticCategories = useAppSelector((state: RootState) => state.general.staticCategories);

  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch])

  const router = useRouter();

  const SideMenuItemsLoadingSkeleton = ({ n }: { n: number }) => {
    const elementsArray = new Array(n).fill("X");
    return(
      <div className='animate-pulse'>
      <div className='flex flex-col gap-6 p-4'>
        <h2 className='text-rose-300 text-xl '>Loading...</h2>
        {
          elementsArray.map((element, index) => <div key={index} className='bg-gray-300 h-4 rounded-md'></div>)
        }
      </div>
    </div>
    )
  }

  return (
    <div className="block flex-col h-screen bg-neutral-800 w-48 overflow-hidden sticky top-0 ">
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
        {genres.length > 0 ?
          <div className='flex flex-col p-2 gap-1  mt-5' >
            <h2 className='text-rose-300 text-base font-bold drop-shadow-xl' >Discover</h2>
            {staticCategories.map((category) => {
              return (
                <Link
                href={`/?category=${category.name}&id=${category.id}&page=1`}
                passHref
                key={category.id}
                >
                <div className='text-slate-200 hover:text-rose-300 hover:bg-neutral-400 hover:cursor-pointer p-1 rounded-md text-sm'
                  
                >
                  {category.name}
                </div>
                </Link>
              );
            })}
          </div>
          :
          <SideMenuItemsLoadingSkeleton n={3} />
        }

        {genres.length > 0 ?
          <div className='flex flex-col gap-1 p-2  mt-5' >
            <h2 className='text-rose-300 text-base font-bold drop-shadow-xl' >Genres</h2>
            {genres.map((genre) => {
              return (
                <Link
                href={`/?category=${genre.name}&id=${genre.id}&page=1`}
                passHref
                key={genre.id}
                >
                <div className='text-slate-200 hover:text-rose-300 hover:bg-neutral-400 hover:cursor-pointer p-1 rounded-md text-sm'
                  
                >
                  {genre.name}
                </div>
                </Link>
              );
            })}
          </div>
          :
          <SideMenuItemsLoadingSkeleton n={16} />
        }
      </div>
      
    </div>
  );
}

export default SideMenuMobil;