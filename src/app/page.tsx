"use client";
import { getGenres } from '@/redux/actions/getGenres';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';

import Image from 'next/image';
import { useEffect } from 'react';



const Home = () => {

  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch])

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-neutral-600">
      <div className="max-w-5xl w-full h-full items-center justify-center font-mono text-sm lg:flex">
        <p>MOVIES APP</p>
      </div>
    </main>

  )
}

export default Home;
