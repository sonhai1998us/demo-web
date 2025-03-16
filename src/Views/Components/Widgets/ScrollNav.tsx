import { useEffect, useState } from "react";
import Image from "next/image";

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents() {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setisOpen] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            const elements = Array.from(document.querySelectorAll("h4, h5"));

            if (elements.length === 0) return;

            const headingList = elements.map((el) => ({
                id: el.id,
                text: el.textContent || "",
                level: el.tagName === "H4" ? 2 : 3,
            }));

            setHeadings(headingList);


            if (elements.length === 0) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    
                    const visibleEntry = entries.find((entry) => entry.isIntersecting);
                    
                    if (visibleEntry) {
                        setActiveId(visibleEntry.target.id);
                    }
                },
                {
                    rootMargin: "-40% 0px -40% 0px",
                    threshold: [0.1, 0.5, 1],
                }
            );

            elements.forEach((el) => observer.observe(el));

            return () => observer.disconnect();
        }, 500);
    }, []);

    return (
       headings.length > 0 &&  <nav>
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-extrabold text-2xl">Nội dung bài viết</h2>
                <Image onClick={() => setisOpen(!isOpen)} className={`cursor-pointer ${isOpen ? '' : 'rotate-[180deg]'}`} src="/images/svg/arr_color_up.svg" width="32" height="32" alt="" />
            </div>
            <div className={`${isOpen ? ' max-h-1000' : 'max-h-0 overflow-hidden'} transition-height duration-500 ease-in-out`}>
                {headings.map((heading) => (
                    <div key={heading.id} className={`${heading.level === 3 ? "ml-4" : ""} mb-2 font-medium text-lg 2xl:whitespace-nowrap`}>
                        <a href={`#${heading.id}`} className={`text-[#33404A] hover:text-black hover:underline ${activeId === heading.id ? "font-bold text-primary" : ""
                            }`}>
                            {heading.text}
                        </a>
                    </div>
                ))}
            </div>
        </nav>
       
    );
}
