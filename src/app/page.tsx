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
      <section
        id="jadwalSholat"
        className="container mx-auto pt-16 px-4 lg:px-0"
      >
        <PreTitle text={"Jadwal Sholat Hari Ini"} center="justify-center" />
        <p className="labelsmall italic text-emerald-700">
          *untuk wilayah Blitar dan Sekitarnya
        </p>

        <JadwalSholat />
      </section>
    </div>
  );
}
