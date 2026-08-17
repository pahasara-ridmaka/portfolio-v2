// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedTemplate } from "@/components/common/AnimatedTemplate";
import { SoundEffects } from "@/components/common/SoundEffects";
import Footer from "@/components/common/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });



export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


export const metadata: Metadata = {
  metadataBase: new URL ("https://www.pahasara.me"),
  title: "Portfolio",
  description: "Personal Portfolio"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white overflow-x-hidden dark max-w-3xl mx-auto px-4 sm:px-6 mt-16 sm:mt-28">
        <SoundEffects />
        <AnimatedTemplate>
          {children}
          <Footer />
        </AnimatedTemplate>
      </body>
    </html>
  );
}
