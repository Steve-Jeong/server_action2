import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <noscript>
          현재 사용 중인 브라우저는 스크립트를 지원하지 않거나, 해당 기능이
          활성화되어 있지 않습니다!
        </noscript>
      </head>
      <body className={`${inter.className} mx-auto bg-white`}>
        <div className="mx-auto flex h-screen max-w-md flex-col items-center border-4 border-pink-700 bg-gray-200">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
