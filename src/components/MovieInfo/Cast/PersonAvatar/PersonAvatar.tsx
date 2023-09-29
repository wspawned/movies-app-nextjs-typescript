"use client"

import Image from "next/image";
import Link from "next/link";

const PersonAvatar:React.FC<{src:string,alt:string,id:number}> = ({src,alt,id}) => {
  return (
    <Link
      href={`/person/?id=${id}`}
      passHref
    // key={id}
    >
      {/* <Image
        className="rounded-xl"
        src={src}
        alt={alt}
        height={90}
        width={90}
      /> */}

      <Image
        className="rounded-xl opacity-60 hover:opacity-100 "
        src={src}
        alt={alt}
        height={90}
        width={90}
      />
      
    </Link>
  )
};

export default PersonAvatar;