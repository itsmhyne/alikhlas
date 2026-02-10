import CardPengumuman from "@/components/website/card-pengumuman";
import Hero from "@/components/website/hero";
import JadwalSholat from "@/components/website/jadwal-sholat";
import PreTitle from "@/components/website/pre-title";
import { amiri } from "@/fonts/font";

export default function HomePage() {
  return (
    <div className="">
      <section className="" id="hero">
        <Hero />
      </section>
      <section id="jadwalSholat" className="container mx-auto pt-16 px-4 ">
        <PreTitle text={"Jadwal Sholat Hari Ini"} center="justify-center" />
        <p className="labelsmall italic text-emerald-700 mt-10">
          *untuk wilayah Blitar dan Sekitarnya
        </p>
        <JadwalSholat />
      </section>
      <section className="container mx-auto pt-16 px-4 " id="pengumuman">
        <PreTitle text={"Pengumuman"} center="justify-center" />
        <CardPengumuman />
      </section>
      <section className="container mx-auto pt-16 px-4 " id="hadits">
        <PreTitle text={"Quote Ayat/Hadits"} center="justify-center" />
        <div className="text-center mt-10">
          <p className={`${amiri.className} bodylarge leading-loose`} dir="rtl">
            اِنَّمَا يَعْمُرُ مَسٰجِدَ اللّٰهِ مَنْ اٰمَنَ بِاللّٰهِ وَالْيَوْمِ
            الْاٰخِرِ وَاَقَامَ الصَّلٰوةَ وَاٰتَى الزَّكٰوةَ وَلَمْ يَخْشَ
            اِلَّا اللّٰهَۗ فَعَسٰٓى اُولٰۤىِٕكَ اَنْ يَّكُوْنُوْا مِنَ
            الْمُهْتَدِيْنَ ۝١٨
          </p>

          <p className="mt-5 text-sm text-gray-600">
            “Sesungguhnya yang (pantas) memakmurkan masjid-masjid Allah hanyalah
            orang yang beriman kepada Allah dan hari Akhir, mendirikan salat,
            menunaikan zakat, serta tidak takut (kepada siapa pun) selain Allah.
            Mereka itulah yang diharapkan termasuk golongan orang-orang yang
            mendapat petunjuk.” (Q.S At-Taubah:18)
          </p>
        </div>
      </section>
    </div>
  );
}
