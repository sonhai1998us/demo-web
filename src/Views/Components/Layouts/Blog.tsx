'use client'
import Image from "next/image";

export default function Blog() {

  return (
    <div className="blog relative">
      <h2 className="text-4xl font-bold mb-4">Tất Cả Bài Viết</h2>
      <div className="rounded-[40px] p-6 md:pt-[60px] md:pb-[50px] md:pl-[60px] flex items-center text-white bg-[url(/images/banner.png)]  bg-no-repeat">
        <div className="md:w-2/3">
          <h3 className="text-2xl md:text-4xl font-bold mb-2 max-w-[376px]">Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!</h3>
          <a href="#" className="inline-flex items-center px-6 py-2 rounded-full font-bold mt-8 border ">
            Tham Gia Ngay
            <Image className="ml-8" alt="" src={"/images/svg/arr_cross.svg"} width={34} height={34} />
          </a>
        </div>
      </div>
    </div>
  )
}