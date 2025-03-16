import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Racing_Sans_One } from "next/font/google";

import Header from "@/Views/Components/Layouts/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const racingSansOne = Racing_Sans_One({
  variable: "--font-racing-sans-one", // Thêm biến CSS
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Homepage",
  description: "This is Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${racingSansOne.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
