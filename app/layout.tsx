import type {Metadata, Viewport} from "next";
import {Sora, JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import {ThemeProvider} from "./_components/ThemeProvider";
import ToastProvider from "./_components/ToastProvider";
import {ChatInterface} from "./_components/ChatInterface";
import ClientOnly from "./_components/ClientOnly";
import {Analytics} from "@vercel/analytics/next";
import ScrollProgress from "./_components/ScrollProgress";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const TITLE = "Pragadeesh VS - AI Systems & Full-Stack Engineer";
const DESCRIPTION =
  "AI Systems and Full-Stack Engineer building production-grade AI agents, RAG platforms, LLM observability, and cloud-native apps.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI systems engineer",
    "RAG",
    "AI agents",
    "LLM observability",
    "cloud-native",
    "Kubernetes",
    "FastAPI",
    "Next.js",
    "full stack engineer",
    "portfolio",
  ],
  authors: [{name: "Pragadeesh VS"}],
  creator: "Pragadeesh VS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pragadeesh.dev",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Pragadeesh VS",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@Pragadeesh1221",
  },
  robots: "index, follow",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' suppressHydrationWarning className='dark'>
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Analytics />
        <ClientOnly>
          <ThemeProvider defaultTheme='dark' forcedTheme='dark'>
            <Hero>
              <ScrollProgress />
              <Navbar />
              <main className='mx-auto w-full'>
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
