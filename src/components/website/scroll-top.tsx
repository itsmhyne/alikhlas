"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <ScrollLink to="topbar" smooth>
      <button className="fixed bottom-6 right-6 z-50 rounded-full bg-emerald-700 p-3 text-white shadow-lg transition hover:bg-emerald-600">
        <ArrowUp className="w-5 h-5" />
      </button>
    </ScrollLink>
  );
}
