// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedTemplate } from "@/components/common/AnimatedTemplate";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Portfolio",
  description: "Personal Developer Portfolio",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white overflow-x-hidden dark max-w-xl mx-auto mt-28">
        <AnimatedTemplate>{children}</AnimatedTemplate>
      </body>
    </html>
  );
}
