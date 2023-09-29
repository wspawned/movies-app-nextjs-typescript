"use client"
import PersonAvatar from "./PersonAvatar/PersonAvatar";
import type { CastType } from "../../../redux/actions/getCredits";


const Cast:React.FC<{cast:CastType[],base_url:string}> = ({cast,base_url}) => {

  const castLimited = (cast.length > 10) ? cast.slice(0,10) : cast ;

  return (
    
    <div className="flex flex-col w-full mt-3" >
      <h3 className='text-lg font-bold' >THE CAST</h3>
      <div className="flex max-w-full overflow-x-auto whitespace-no-wrap overflow-ellipsis gap-4" >
      {castLimited.map((person)=>{return(
        <PersonAvatar 
        src={`${base_url}w185${person.profile_path}`}
        alt={person.name}
        id={person.id}
        />
      )})}
      </div>
    </div>
   
    
  )
};

export default Cast;