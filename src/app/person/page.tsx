"use client"

import { getPerson, PersonType } from "../../redux/actions/getPerson";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useEffect } from 'react';
import { getPersonMovies, PersonMoviesApiType, PersonMovieType } from "../../redux/actions/getPersonMovies";
import { useSearchParams } from "next/navigation";
import PersonMovieList from "@/components/PersonMovieList/PersonMovieList";
import PersonInfo from "@/components/PersonInfo/PersonInfo";

const Person = () => {

  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  const dispatch = useAppDispatch();
  const person = useAppSelector((state) => state.person.personInfo) as PersonType;
  const personMovies = useAppSelector((state) => state.person.personMovies) as PersonMovieType[];
  
  useEffect(  () => {
    dispatch( getPerson(id) );
    dispatch( getPersonMovies(id) );
  },[dispatch, id ])

  return (
    <div className="flex flex-col justify-center items-center w-full gap-4 p-4 md:px-40">
      <PersonInfo person={person}/>
      <PersonMovieList movies= {personMovies}/>
    </div>
  );
};

export default Person;