"use client"

import React, { PropsWithChildren, useEffect, useRef } from "react"
import { createPortal } from "react-dom";


const TrailerModal:React.FC <PropsWithChildren & {closeModal: () => void} > = ({ children, closeModal }) => {

  const elRef = useRef <HTMLElement | null> ()  ;

  if (!elRef.current) {
    
    elRef.current = document.createElement("div") ;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal-trailer")! as HTMLElement;
    
    modalRoot.appendChild(elRef.current!);
    
    return () => { modalRoot.removeChild(elRef.current!) };
  }, [])  ;

  return createPortal(
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center flex-col'
      onClick={() => closeModal()}
    >
      {children}
    </div>,
    elRef.current
  );
};

// <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-85 z-50 opacity-100 flex justify-center items-center flex-col' >

export default TrailerModal;