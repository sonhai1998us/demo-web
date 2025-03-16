'use client'
import React from "react";
import Image from "next/image";

const Social = () => {
  return (
    <div className="fixed max-[1700px]:left-5 left-20 xl:top-80 md:top-50 flex flex-col gap-2">
      <label className="block font-extrabold text-base">Chia sẻ</label>
      <Image className="cursor-pointer hover:opacity-50" src={"/images/zalo.png"} width={48} height={48} alt="zalo" />
      <Image className="cursor-pointer hover:opacity-50" src={"/images/fb.png"} width={48} height={48} alt="fb" />
      <Image className="cursor-pointer hover:opacity-50" src={"/images/x.png"} width={48} height={48} alt="x" />
      <Image className="cursor-pointer hover:opacity-50" src={"/images/in.png"} width={48} height={48} alt="in" />
      <Image className="cursor-pointer hover:opacity-50" src={"/images/red.png"} width={48} height={48} alt="red" />
    </div>
  );
};

export default Social;
