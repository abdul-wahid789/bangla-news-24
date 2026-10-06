import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Marquee from "react-fast-marquee";
import Headline from "./components/shared/Headlines";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto_serif",
  subsets: ["latin", "bengali"],
});


export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "Bangla new website. Lasted news are sourced from the bbc bangla api, via third party api provider. --this is a practice project--",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
       <Headline/>
        <main className="container mx-auto">

          {children}
        </main>
      </body>
    </html>
  );
}
