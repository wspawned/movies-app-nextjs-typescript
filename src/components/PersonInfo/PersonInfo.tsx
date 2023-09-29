"use client"

import Image from "next/image";
import { PersonType } from "../../redux/actions/getPerson";

const PersonInfo:React.FC<{person:PersonType}> = ({person}) => {

  const {name, biography, birthday, deathday, profile_path, } = person;
  const base_url = process.env.NEXT_PUBLIC_TMDB_IMG_BASE_URL as string;

  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-start pb-6 pt-0 md:pt-32 gap-12">

      <div className="flex w-full md:w-1/3" >
        <Image
          src={`${base_url}w342${profile_path}`}
          alt={`${name} Poster`}
          width={342}
          height={513}
        />
      </div>

      <div className="flex flex-col w-full h-full gap-12">
        <div className="flex flex-col gap-2 text-slate-200 pb-2 border-b-orange-400 border-b-2" >
          <h1 className='text-3xl font-bold' >{`  ${name?.toUpperCase()}  `}</h1>
          <p className='text-2xl' >{(!deathday)? `${birthday}` : `${birthday} / ${deathday}` }</p>
        </div>


        <div className="flex flex-col w-full gap-2 text-slate-200 overflow-auto " >
          <h3 className='text-lg font-bold' >THE BIOGRAPHY</h3>
          <p className="max-h-80" >{`${biography}`}</p>
        </div>

      </div>

    </div>
  );
};

export default PersonInfo;