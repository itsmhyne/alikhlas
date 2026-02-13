import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const menu = [
    {
      title: "Beranda",
      path: "/",
    },
    {
      title: "Profile",
      path: "/profile",
    },
    {
      title: "Jadwal",
      path: "/jadwal",
    },
    {
      title: "Kegiatan",
      path: "/kegiatan",
    },
    {
      title: "Pengumuman",
      path: "/pengumuman",
    },
    {
      title: "Donasi & Infak",
      path: "/donasi-infak",
    },
    {
      title: "Keuangan",
      path: "/keuangan",
    },
    {
      title: "ZIS",
      path: "/zis",
    },
    {
      title: "Artikel & Kajian",
      path: "/artikel-kajian",
    },
    {
      title: "Kontak",
      path: "/kontak",
    },
  ];

  const pathName = usePathname();

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-5 items-center">
        {menu.map((item, key) => {
          const isActive = pathName === item.path;
          return (
            <Link href={item.path} key={key}>
              <li
                className={`labelsmall hover:border-b-2 hover:border-b-emerald-700 hover:text-emerald-700 ${
                  isActive
                    ? "border-b-2 border-b-emerald-700 text-emerald-700 font-semibold"
                    : ""
                }`}
              >
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
// Author : M. Hamdan Yusuf 😎
