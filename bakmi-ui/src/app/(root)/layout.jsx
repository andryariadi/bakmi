"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function RootLayout({ children }) {
  useEffect(() => {
    // Periksa apakah berjalan di lingkungan peramban
    if (typeof window !== "undefined") {
      import("aos").then((aos) => {
        aos.init();
      });
    }
  }, []);

  return (
    <div className="flex flex-col h-screen bg-transparent">
      <Navbar />
      <main className="flex-1 mt-[86px]">{children}</main>
      <Footer />
    </div>
  );
}
