"use client";

import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { AlignLeftIcon, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function NavbarMobile() {
  const menu = [
    {
      title: "Beranda",
      path: "/",
    },
    {
      title: "Profile",
      path: "profile",
    },
    {
      title: "Jadwal",
      path: "jadwal",
    },
    {
      title: "Kegiatan",
      path: "kegiatan",
    },
    {
      title: "Pengumuman",
      path: "pengumuman",
    },
    {
      title: "Donasi & Infak",
      path: "donasi-infak",
    },
    {
      title: "Keuangan",
      path: "keuangan",
    },
    {
      title: "Zakat, Infak & Sedekah",
      path: "zis",
    },
    {
      title: "Artikel & Kajian",
      path: "artikel-kajian",
    },
    {
      title: "Kontak",
      path: "kontak",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-white flex items-center justify-center bodymedium lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <AlignLeftIcon className="text-black" />
      </SheetTrigger>
      <SheetContent className="bg-linear-to-b from-green-700 via-teal-700 to-emerald-700 border-none text-white">
        <div className="flex flex-col pt-16 pb-8 items-center justify-evenly h-full">
          <SheetHeader>
            <SheetTitle>
              <p className="bodymedium uppercase font-extrabold text-white">
                Masjid Al-Ikhlas
              </p>
            </SheetTitle>
            <SheetDescription className="sr-only">navigatipn</SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col gap-5 justify-center text-center">
            {menu.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white uppercase font-primary font-medium tracking-[1.2px] "
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="hover:border-b-2 hover:border-b-white "
                  >
                    {link.title}
                  </Link>
                  {/* <ScrollLink
                to={link.path}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink> */}
                </li>
              );
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
// Author : M. Hamdan Yusuf 😎
