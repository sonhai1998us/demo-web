'use client'

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Card from "@/Views/Components/Widgets/Card";

import { productsData } from "@/Mocks/Products";

type Product = {
  id: number;
  category: string;
  title: string;
  created_at: string;
  read_time: string;
};

export default function Products() {
  const [products] = useState<Product[]>(productsData)
  return (
    <>
      <div className="products grid grid-cols-2 gap-8">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-between items-center w-full mx-auto py-4 flex-wrap gap-2">
        <Link href="#" className="flex items-center space-x-2 text-[#B3C5D4]">
          <span><Image src="/images/svg/arrowleft1.svg" width={24} height={24} alt="" /></span>
          <span className="font-semibold text-base">Trang trước</span>
        </Link>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-[#D1F7EA] text-[#052B1E] font-semibold rounded-md">1</span>
          <Link href="#" className="px-2 py-1 hover:text-gray-700">2</Link>
          <Link href="#" className="px-2 py-1 hover:text-gray-700">3</Link>
          <span className="px-2">...</span>
          <Link href="#" className="px-2 py-1 hover:text-gray-700">8</Link>
          <Link href="#" className="px-2 py-1 hover:text-gray-700">9</Link>
          <Link href="#" className="px-2 py-1 hover:text-gray-700">10</Link>
        </div>

        <Link href="#" className="flex items-center space-x-2 text-[#4D5F6E]">
          <span className="font-semibold text-base">Trang kế tiếp</span>
          <span><Image src="/images/svg/arrowright1.svg" width={24} height={24} alt="" /></span>
        </Link>
      </div>
    </>
  )
}