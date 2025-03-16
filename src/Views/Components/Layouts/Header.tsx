'use client'
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function Header() {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = (): void => {
        setOpenMenu(!isOpenMenu);
    }

    return (
        <header>
            <div className="header max-w-7xl hidden md:flex md:max-w-3xl lg:max-w-4xl xl:max-w-6xl m-auto w-full absolute left-1/2 top-6 transform -translate-x-1/2 items-center justify-center gap-10 sm:gap-16 rounded-[40px] p-3">
                <Link href={"/"}>
                    <Image className="cursor-pointer" src="/images/logo.png" alt="FosoSoft" width={134} height={55} />
                </Link>
                <div className="nav-navigate flex items-center flex-col lg:flex-row gap-2 ">
                    <Link className="text-menu p-2 text-sm" href={"/"}>Về Chúng tôi</Link>
                    <Link className="text-menu p-2 text-sm flex gap-2 items-center" href={"/"}>
                        Giải pháp
                        <Image src="/images/svg/arrow_down.svg" alt="icon" width={16} height={16} />
                    </Link>
                    <Link className="text-menu p-2 text-sm items-center relative active" href={"/"}>
                        <div className="flex gap-2 ">
                            <div>Tài nguyên</div>
                            <div className="w-[6px] h-[6px] rounded-full bg-[#1AD598] absolute top-7 left-1/2 -translate-x-1/2"></div>
                            <Image src="/images/svg/arrow_down.svg" alt="icon" width={16} height={16} />
                        </div>
                    </Link>
                    <Link className="text-menu p-2 text-sm" href={"/"}>Liên hệ</Link>
                </div>
                <div className="nav-action flex gap-2 flex-col xl:flex-row">
                    <div className="language flex items-center cursor-pointer pt-2 pb-2 pl-3 pr-3 w-max rounded-[40px] bg-[#E5E6E6] border border-[#CDCDCD]">
                        <Image src="/images/icon_country.png" alt="icon" width={24} height={24} className="mr-3" />
                        <span className="mr-1 font-medium text-sm">VI</span>
                        <Image src="/images/svg/vector_lang_down.svg" alt="icon" width={11.6} height={6.5} />
                    </div>
                    <div className="customer flex items-center gap-3 bg-primary pt-2 pb-2 pl-3 pr-3 rounded-[40px] cursor-pointer">
                        <span className="text-sm font-bold">Trở thành khách hàng</span>
                        <Image src="/images/arrow.png" alt="arrow" width={22} height={22} />
                    </div>
                </div>
            </div>
            <div onClick={handleOpenMenu} className="z-99 flex items-center justify-center md:hidden absolute top-3 left-3 rounded-full w-8 h-8 bg-[#fff] border-[#CCC] border">
                <Image src="/images/svg/menu.svg" alt="menu" width={10} height={10} />
            </div>
            <div className={`z-99 md:hidden absolute top-12 rounded-lg w-max min-w-3xs bg-[#fff] border-[#CCC] border p-2 transition-all duration-200 ${isOpenMenu ? "translate-x-0 left-3" : "-translate-x-full left-0"}`}>
                <Image className="mb-3" src="/images/logo.png" alt="FosoSoft" width={134} height={55} />
                <div className="nav-navigate flex flex-col lg:flex-row gap-2 ">
                    <Link className="text-menu p-2 text-sm" href={"/"}>Về Chúng tôi</Link>
                    <Link className="text-menu p-2 text-sm" href={"/"}>Giải pháp</Link>
                    <Link className="text-menu p-2 text-sm active" href={"/"}>Tài nguyên</Link>
                    <Link className="text-menu p-2 text-sm" href={"/"}>Liên hệ</Link>
                </div>

                <div className="nav-action flex gap-2 flex-col xl:flex-row mt-3">
                    <div className="language flex items-center cursor-pointer pt-2 pb-2 pl-3 pr-3 w-max rounded-[40px] bg-[#E5E6E6] border border-[#CDCDCD]">
                        <Image src="/images/icon_country.png" alt="icon" width={24} height={24} className="mr-3" />
                        <span className="mr-1 font-medium text-sm">VI</span>
                        <Image src="/images/svg/vector_lang_down.svg" alt="icon" width={11.6} height={6.5} />
                    </div>
                    <div className="customer w-max flex items-center gap-3 bg-primary pt-2 pb-2 pl-3 pr-3 rounded-[40px]">
                        <span className="text-sm font-bold">Trở thành khách hàng</span>
                        <Image src="/images/arrow.png" alt="arrow" width={22} height={22} />
                    </div>
                </div>
            </div>
        </header>
    )
}