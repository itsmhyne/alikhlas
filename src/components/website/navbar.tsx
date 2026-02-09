import Link from "next/link";

export default function Navbar() {
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

  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex gap-5">
          {menu.map((item, key) => (
            <Link href={item.path} key={key}>
              <li className="labelsmall hover:border-b-2 hover:border-b-emerald-700 hover:text-emerald-700">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
// Author : M. Hamdan Yusuf 😎
