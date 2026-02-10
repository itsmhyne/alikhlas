import CardPengumuman from "@/components/website/card-pengumuman";
import Hero from "@/components/website/hero";
import JadwalSholat from "@/components/website/jadwal-sholat";
import PreTitle from "@/components/website/pre-title";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="">
      <section className="" id="hero">
        <Hero />
      </section>
      <section id="jadwalSholat" className="container mx-auto pt-16 px-4">
        <PreTitle text={"Jadwal Sholat Hari Ini"} center="justify-center" />
        <p className="labelsmall italic text-emerald-700 mt-10">
          *untuk wilayah Blitar dan Sekitarnya
        </p>
        <JadwalSholat />
      </section>
      <section className="container mx-auto pt-16 px-4" id="pengumuman">
        <PreTitle text={"Pengumuman"} center="justify-center" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-0 lg:grid-cols-3 mt-10">
          <CardPengumuman />
          <CardPengumuman />
          <CardPengumuman />
        </div>
      </section>
    </div>
  );
}
