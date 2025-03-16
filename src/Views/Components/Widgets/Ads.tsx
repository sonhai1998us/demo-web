'use client'
import React, { useState } from "react";

import Image from "next/image";


import { adsData } from "@/Mocks/Ads";

type Ads = {
  id: number;
  img: string;
  title?: string;
};


const Ads = () => {

  const [ads] = useState<Ads[]>(adsData)

  return (<>
    {ads.map((ad) => (
      <div key={ad.id} className="ads w-full bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl items-end pt-9 pb-15">
        <Image className="w-full h-auto" src={ad.img} width={367} height={420} alt="Advertisement" />
        <div className="px-6">
          {ad.title ? <>
            <span className="font-bold text-xl text-white mt-6">Gia nhập cộng đồng FMRP Việt –
              Kết nối, chia sẻ, cùng phát triển!</span>
            <button className="w-full cursor-pointer flex items-center justify-center sm:justify-between mt-6 px-4 py-2 border border-white text-white rounded-full text-sm">
              Trải Nghiệm Ngay
              <Image className="ml-8 hidden sm:block" alt="" src={"/images/svg/arr_cross.svg"} width={34} height={34} />
            </button></> : <button className="w-full cursor-pointer flex items-center justify-center sm:justify-between mt-14 px-4 py-2 border border-white text-white rounded-full text-sm">
            Trải Nghiệm Ngay
            <Image className="ml-8 hidden sm:block" alt="" src={"/images/svg/arr_cross.svg"} width={34} height={34} />
          </button>}

        </div>
      </div>
    ))}</>
  );
};

export default Ads;
