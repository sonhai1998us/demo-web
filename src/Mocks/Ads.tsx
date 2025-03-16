
interface Ads {
    id: number;
    img: string;
    title?: string;
}

export const adsData: Ads[] = [
    { id: 1, img: '/images/ads_1.png'},
    { id: 2, img: '/images/ads_2.png', title: 'Gia nhập cộng đồng FMRP Việt'},
];