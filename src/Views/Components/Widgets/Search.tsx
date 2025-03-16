'use client'
import React from "react";

import Image from "next/image";

const Search = () => {
  return (
    <div className="">
      <label className="block font-extrabold text-2xl mb-6">Tìm Kiếm</label>
      <div className="relative">
        <input type="text" placeholder="Tìm kiếm bài viết"
          className="w-full p-4 pl-5 pr-14 rounded-lg bg-white shadow-search text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#15AA7A]" />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#15AA7A] hover:bg-primary text-white p-3 rounded-lg cursor-pointer">
          <Image src="/images/svg/search.svg" width={24} height={24} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Search;
