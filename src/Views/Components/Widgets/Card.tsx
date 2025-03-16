'use client'
import React from "react";

import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  category: string;
  title: string;
  created_at: string;
  read_time: string;
};

type CardProps = {
  product: Product;
};


const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden">
      <Image src="/images/product.png" width={505} height={475} alt="BOM là gì?" className="w-full" />
      <span className="block w-max text-xs font-medium text-[#0F4F9E] bg-[#E2F0FE] px-2 py-1 rounded-lg mt-6">{product.category}</span>
      <h2 className="text-2xl font-extrabold mt-4">
        {product.title}
      </h2>
      <div className="flex font-medium text-base items-center text-gray-500 text-sm mt-4 space-x-4 flex-wrap">
        <span className="flex items-center gap-1">
          <Image src="/images/svg/calendar_blank.svg" width={24} height={24} alt="calendar_blank" />
          {product.created_at}</span>
        <span className="flex items-center gap-1">
          <Image src="/images/svg/clock.svg" width={24} height={24} alt="clock" />
          {product.read_time}</span>
      </div>
      <Link href={'/blog/'+product.id} className="text-[#667F93] hover:text-black flex gap-7 items-center font-medium text-sm mt-4 block">
        <>
          Khám phá thêm<Image src="/images/svg/arrowright.svg" width={24} height={24} alt="arrowright" />
        </>
      </Link>
    </div>
  );
};

export default Card;
