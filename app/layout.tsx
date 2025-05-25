import type {Metadata, Viewport} from "next";
import {Inter, Open_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import {ThemeProvider} from "./_components/ThemeProvider";
import ToastProvider from "./_components/ToastProvider";
import {ChatInterface} from "./_components/ChatInterface";
import ClientOnly from "./_components/ClientOnly";
import {Analytics} from "@vercel/analytics/next";

const openSans = Open_Sans({subsets: ["latin"], display: "swap"});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
  robots: "index, follow",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' suppressHydrationWarning className='dark'>
      <body
        className={`${openSans.className} antialiased min-h-screen flex flex-col`}>
        <Analytics />
        <ClientOnly>
          <ThemeProvider defaultTheme='dark' forcedTheme='dark'>
            <Hero>
              <header className='sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-gray-800'>
                <Navbar />
              </header>
              <main className='flex-1 mx-auto w-full min-h-[calc(100vh-180px)] '>
                {children}
              </main>
              <footer className='mt-auto'>
                <Footer />
              </footer>
              <ChatInterface />
            </Hero>
          </ThemeProvider>
          <ToastProvider />
        </ClientOnly>
      </body>
    </html>
  );
}
