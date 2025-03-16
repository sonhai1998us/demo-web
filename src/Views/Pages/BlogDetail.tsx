'use client'
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { productsData } from "@/Mocks/Products";

import Ads from "@/Views/Components/Widgets/Ads";
import Card from "@/Views/Components/Widgets/Card";
import ScrollNav from "@/Views/Components/Widgets/ScrollNav";
import Social from "@/Views/Components/Widgets/Social";


type Product = {
    id: number;
    category: string;
    title: string;
    content?: string;
    created_at: string;
    read_time: string;
};

const DetailPage = () => {

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>(productsData);

    const params = useParams();

    useEffect(() => {
        if (params.id) {
            const filtered = productsData.filter(product => product.id === Number(params.id));
            setFilteredProducts(filtered);
        }
    }, [params.id]);

    return (
        <>
            <div className="max-w-[1440px] w-full mx-auto mt-3 md:mt-[250px] lg:mt-[200px] xl:mt-[127px]">
                {filteredProducts.length > 0 && (
                    filteredProducts.map(product =>
                        product.content ?
                            <nav key={product.id} className="mt-[50px] sm:mt-0 text-sm text-gray-600 mb-13 px-3">
                                <Link href="/" className="text-[#050505]">
                                    Trang chủ
                                </Link>{" "}
                                &gt;{" "}
                                <Link href="/resources" className="text-[#050505]">
                                    Tài nguyên
                                </Link>{" "}
                                &gt;{" "}
                                <Link href="/blog" className="text-[#050505]">
                                    Blog
                                </Link>{" "}
                                &gt; <span className="font-bold">Quản lý sản xuất</span>
                            </nav> : <></>))}
                <div className="flex flex-col lg:flex-row w-full pl-3 pr-3 gap-8 relative">
                    <Social />
                    <div className="width-[100%] lg:w-[70%] flex flex-col gap-6">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product =>
                                product.content ?
                                    <div key={product.id}>
                                        <div className="bg-white rounded-lg">

                                            <div className="inline-block bg-[#E2F0FE] text-[#0F4F9E] px-3 py-1 rounded-full text-sm mb-4">
                                                {product.category}
                                            </div>

                                            <h1 className="text-4xl font-extrabold text-[#050505] mb-4">
                                                {product.title}
                                            </h1>

                                            <div className="flex items-center text-gray-500 justify-between text-sm mt-3 space-x-4 mb-6">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={'/images/avatar.png'}
                                                        alt="Tác giả"
                                                        width={64}
                                                        height={64}
                                                        className="rounded-full"
                                                    />
                                                    <div className="flex flex-col">
                                                        <span className="font-medium text-sm text-[#667F93]">Tác giả</span>
                                                        <span className="font-bold text-sm text-[#33404A]">FOSO Creator</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-6 flex-wrap">
                                                    <div className="flex items-center">
                                                        <Image src="/images/svg/calendar_blank.svg" width={24} height={24} alt="calendar_blank" />  <span className="ml-1">Cập nhật vào: {product.created_at}</span>
                                                    </div>
                                                    <div className="border-[#D9E1E7] border h-[24px]"></div>
                                                    <div className="flex items-center">
                                                        <Image src="/images/svg/clock.svg" width={24} height={24} alt="clock" /> <span className="ml-1">{product.read_time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: product.content || '' }} />
                                    </div> : <h1 className="text-2xl font-bold">Chưa có nội dung</h1>
                            )
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="w-full lg:w-[30%] flex flex-col gap-8">
                        <ScrollNav />
                        <div className="grid lg:grid-cols-1 grid-cols-2 xl:flex lg:flex-col gap-12">
                            <Ads />
                        </div>
                    </div>
                </div>
            </div>

            <div className="products max-w-[1440px] mx-auto mt-12 px-3">
                <h3 className="font-extrabold text-4xl">Bài viết liên quan</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-6">
                    {products.length > 0 && products.filter(product => product.id !== parseInt(params.id as string)).slice(-3).map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default DetailPage;
