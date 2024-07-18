import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import Providers from "@/providers/providers";
import { QueryClientProvider } from "@tanstack/react-query";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Social Trade",
  description: "Sell and buy whatever you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-sans antialiased",
          "dark",
          fontSans.variable
        )}
      >
        <Providers>
          <Header />
          <main className="flex relative ">
            <Sidebar />
            <div className="container mx-auto max-w-[1400px] grid-cols-1">
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
