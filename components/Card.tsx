import React from "react";
import Image from "next/image";

function Card() {
  return (
    <div className="w-80 border-2 border-solid border-white rounded-2xl p-10 flex flex-col items-center justify-center gap-3">
      <div className="relative w-60 h-40 ">
        <Image src="/featured.png" alt="Image" fill className="object-cover" />
      </div>
      <div className="flex self-start items-center gap-5  mb-3">
        <div className="w-8 h-8 rounded-full bg-white text-black text-center p-1">CN</div>
        <p className="font-sm">Rajesh Paudel</p>
      </div>
      <h3 className="font-bold ">Learn the web development in 5 days </h3>
    </div>
  );
}

export default Card;
