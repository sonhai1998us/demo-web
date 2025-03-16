import Image from "next/image";
import Link from "next/link";

import Blog from "@/Views/Components/Layouts/Blog";
import Products from "@/Views/Components/Layouts/Products";
import Search from "@/Views/Components/Widgets/Search";
import Categories from "@/Views/Components/Widgets/Categories";
import Ads from "@/Views/Components/Widgets/Ads";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -left-[0%] -translate-x-1/2 top-[340px] w-[500px] h-[500px] bg-linear-to-r from-[#E0FFCC] to-[#CCFFEC] blur-[267px] -z-1 rounded-full"></div>
      <div className="absolute right-[0%] translate-x-1/2 bottom-[0] w-[500px] h-[500px] bg-linear-to-r from-[#E0FFCC] to-[#CCFFEC] blur-[267px] -z-1 rounded-full"></div>
      <div className="relative w-full py-8 md:py-12 overflow-hidden md:mt-[200px] xl:mt-[127px]">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Image
            src="/images/calendar.png"
            width={195}
            height={188}
            alt="Calendar icon"
          />
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <Image
            src="/images/hand.png"
            width={195}
            height={158}
            alt="Colorful icon"
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex flex-col items-center justify-center">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-800 mb-1">
              Trang chủ &gt; Tin tức &gt; <span className="font-semibold">Blog</span>
            </Link>

            <h1 className="text-3xl text-6xl text-center mt-18 leading-[100px]">
              Blog <span className="test font-extrabold">FOSO</span> <span className="font-normal">-</span>
            </h1>

            <h2 className="text-6xl text-center mt-1 ">
              Cập Nhật Tin Tức <div className="relative inline-block font-extrabold">
                <span className="relative z-10 text-6xl">Mới Nhất</span>
                <span className="absolute left-0 bottom-0 w-full h-[28px] bg-green-200 rounded-[40px]"></span>
              </div>
            </h2>

            <p className="text-sm md:text-base text-gray-600 mt-2 max-w-2xl">
              Cùng FOSO tham gia kiến thức, xu hướng công nghệ và sản xuất ngay!
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full pl-3 pr-3 gap-8 max-w-[1440px] flex-col xl:flex-row mx-auto mt-24 relative">
        <div className="w-[100%] xl:w-[70%] w-full flex flex-col gap-12">
          <Blog />
          <Products />
        </div>
        <div className="w-[100%] xl:w-[30%] flex flex-col gap-8 relative ">
        
          <Search />
          <Categories />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex xl:flex-col gap-12">
            <Ads />
          </div>
        </div>
      </div>
    </div>
  );
}
