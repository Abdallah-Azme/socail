import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/navbar/header";

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
          "h-[5000px]",
          fontSans.variable
        )}
      >
        <Header />
        <main className="flex w-screen">
          <Sidebar />
          <div className="container mx-auto max-w-[1400px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
