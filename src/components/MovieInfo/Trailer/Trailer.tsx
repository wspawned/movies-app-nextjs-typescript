"use client"

import { useState } from "react";
import type { VideoResultType } from "../../../redux/actions/getMovie";
import TrailerModal from "./TrailerModal/TrailerModal";

const Trailer:React.FC<{videos:VideoResultType[]}> = ({videos}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {setShowModal(true)};
  const closeModal = () => {setShowModal(false)};

  if(videos?.length===0) {
    return null;
  }

  const { key: videoId } = videos?.find(video => video.type === 'Trailer' && video.site === 'YouTube') || {};

  return (
    <>
      <button
      className="text-slate-300 font-bold hover:text-black hover:decoration-orange-400 decoration-2 hover:cursor-pointer underline underline-offset-4 px-4 py-2 text-lg"
      onClick={()=> openModal()}
      >
        Trailer
      </button>
      {
        showModal ?
        
        <TrailerModal
        closeModal={closeModal}
        >
          <iframe
          className="video-frame w-full h-60 md:w-1/2 md:h-1/2 z-50"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          title="Trailer"
          allowFullScreen
          
          />
        </TrailerModal>
         :
        null
      }
    </>
  )
};

export default Trailer;