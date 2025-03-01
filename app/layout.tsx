import type {Metadata} from "next";
import {Inter, Open_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import {ThemeProvider} from "next-themes";
import ToastProvider from "./_components/ToastProvider";
import PortfolioAssistant from "./_components/PortfolioAssistant";

const inter = Inter({subsets: ["latin"]});
const openSans = Open_Sans({subsets: ["latin"], display: "swap"});

export const metadata: Metadata = {
  title: "Pragadeesh - Full Stack Developer",
  description:
    "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "web developer",
    "full stack",
    "react",
    "next.js",
    "portfolio",
    "javascript",
    "typescript",
  ],
  authors: [{name: "Pragadeesh"}],
  creator: "Pragadeesh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pragadeesh.dev",
    title: "Pragadeesh - Full Stack Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    siteName: "Pragadeesh's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragadeesh - Full Stack Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    creator: "@Pragadeesh1221",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${openSans.className} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Hero>
            <header className='sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-blue-100/50 dark:border-gray-800'>
              <Navbar />
            </header>
            <main className='flex-1 mx-auto w-full min-h-[calc(100vh-180px)] '>
              {children}
            </main>
            <footer className='mt-auto'>
              <Footer />
            </footer>
            <PortfolioAssistant />
          </Hero>
        </ThemeProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
