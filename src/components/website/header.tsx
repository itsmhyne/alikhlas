"use client";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import NavbarMobile from "./navbar-mobile";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    // <header className="flex w-full justify-between items-center bg-transparent backdrop-blur-lg shadow-lg py-4 px-5">
    <header
      className={`sticky py-4 px-5 top-0 z-50 transition-all ${
        scrolled ? "bg-white backdrop-blur shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex w-full  justify-between items-center">
          {/* logo */}
          <h1 className="bodymedium uppercase font-bold text-emerald-700">
            Masjid Al-Ikhlas
          </h1>
          {/* navbar pc */}
          <Navbar />
          {/* navbar mobile default */}
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
}
// Author : M. Hamdan Yusuf 😎
