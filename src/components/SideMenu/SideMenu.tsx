"use client"
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { RootState } from '../../redux/store';
import { getGenres } from '@/redux/actions/getGenres';
import { usePathname, useRouter } from 'next/navigation';


function SideMenu() {

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
        <h2 className='text-rose-300 text-xl'>Loading...</h2>
        {
          elementsArray.map((elm) => <div className='bg-gray-300 h-4 rounded-md'></div>)
        }
      </div>
    </div>
    )
  }

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
        {genres.length > 0 ?
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
          :
          <SideMenuItemsLoadingSkeleton n={3} />
        }

        {genres.length > 0 ?
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
          :
          <SideMenuItemsLoadingSkeleton n={16} />
        }
      </div>
      
    </div>
  );
}

export default SideMenu;

{/* <div className='animate-pulse'>
      <div className='flex flex-col gap-2 p-4'>
        <h2 className='text-rose-300 text-xl'>Loading...</h2>
        <div className='bg-gray-300 h-4 rounded-md'></div>
        <div className='bg-gray-300 h-4 rounded-md'></div>
        <div className='bg-gray-300 h-4 rounded-md'></div>
      </div>
    </div> */}