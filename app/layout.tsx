import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeWall",
  description: "Admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[350px]">
             <Sidebar />
            </div>
          <div className="p-5 w-full md:max-w-[1140px]">
          {children}
          </div>
        </div>
      </body>
    </html>
  );
}
