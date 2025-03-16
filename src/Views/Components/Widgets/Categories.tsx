'use client'
import React, { useState } from "react";

import Link from "next/link";


import { categoriesData } from "@/Mocks/Categories";

type Category = {
  id: number;
  name: string;
  quantity: number;
};


const Categories = () => {
  
  const [categories] = useState<Category[]>(categoriesData)

  return (
    <div className="category">
      <label className="block font-extrabold text-2xl mb-6">Danh mục</label>
      <ul className="space-y-2 text-gray-600">
        {categories.map((category) => (
          <li className="list-none" key={category.id}>
            <Link className={`flex justify-between ${categories.length !== category.id ? 'border-b border-[#F1F5F7]' : ''} pb-2 text-lg text-[#33404A] hover:text-black cursor-pointer`} href={"/"}>
              <>
                <span>{category.name}</span>
                <span>{category.quantity}</span>
              </>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
