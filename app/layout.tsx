import type { Metadata } from "next";
import { Geist, Geist_Mono , Sour_Gummy} from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ClickSpark";


const sourGummy= Sour_Gummy({
  subsets: ["latin"],
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "avii Portfolio",
  description: "created by avii  Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} ${sourGummy.className} antialiased`}
      >
        <span className="fixed top-0 left-0 w-full h-fit  z-50 bg-red-950 p-1 text-white text-center  hidden md:block  text-sm "> Searching for job , freelancing , internships : @aviinashgarwal@gmail.com  </span>
        <span className="fixed top-0 left-0 w-full h-fit  z-50 bg-red-950 p-1 text-white text-center  block md:hidden  text-sm "> Searching for job , freelancing   </span>
        <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  
        {children}
</ClickSpark>
       
      </body>
    </html>
  );
}
