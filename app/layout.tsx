import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import {ThemeProvider} from "next-themes";
import ToastProvider from "./_components/ToastProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Hero>
            <header className=' flex-shrink-0 '>
              <Navbar />
            </header>
            <main className='flex-1 mx-auto p-4 flex items-center justify-center '>
              {children}
            </main>
            <footer className=' flex-shrink-0 '>
              <Footer />
            </footer>
          </Hero>
        </ThemeProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
