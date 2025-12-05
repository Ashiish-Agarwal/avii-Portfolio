import type { Metadata } from "next";
import { Geist, Geist_Mono , Sour_Gummy} from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ClickSpark";
import { ThemeProvider } from "@/components/themeprovider";
import { ModeToggle } from "@/components/theme";
import MusicPlayer from "@/components/MusicPlayer";

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
  title: 'Avii Portfolio',
  description:
    'Web developers create websites for freelancing, jobs, internships, startups — legal and otherwise.',
  openGraph: {
    title: 'Avii Portfolio',
    description:
      'Explore Avii’s portfolio — modern web development for freelancers, startups, and businesses.',
    url: 'https://aviiportfolio.netlify.app',
    siteName: 'Avii Portfolio',
    images: [
      {
        url: 'https://aviiportfolio.netlify.app/favicon.ico', // optional Open Graph image
        width: 1200,
        height: 630,
        alt: 'Avii Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

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
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

        <span className="fixed top-0 left-0 w-full h-fit  z-50 bg-red-950 p-1 text-white text-center  hidden md:block  text-sm "> working as a Full Stack Developer but want new opportunities , freelancing , internships : @aviinashgarwal@gmail.com  </span>
        <span className="fixed top-0 left-0 w-full h-fit  z-50 bg-red-950 p-1 text-white text-center  block md:hidden  text-sm "> working as a Full Stack Developer but want new opportunities   </span>
        <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  <ModeToggle/>
  

        {children}
</ClickSpark>
       
  </ThemeProvider>
      </body>
    </html>
  );
}

