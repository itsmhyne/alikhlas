import CardJumat from "@/components/website/card-jumat";
import HeroSection from "@/components/website/hero-section";
import JadwalSholat from "@/components/website/jadwal-sholat";
import PreTitle from "@/components/website/pre-title";

export default function JadwalPage() {
  return (
    <div>
      <section id="sholat">
        <HeroSection text={"Jadwal"} />
      </section>
      <section id="jadwalSholat" className="container mx-auto pt-16 px-4 ">
        <PreTitle text={"Jadwal Sholat Hari Ini"} center="justify-center" />
        <p className="labelsmall italic text-emerald-700 mt-10">
          *untuk wilayah Blitar dan Sekitarnya
        </p>
        <JadwalSholat />
      </section>
      <section className="container mx-auto pt-16 px-4">
        <PreTitle text="Jadwal Sholat Jumat" center="yes" />

        <div className="mt-10 text-center">
          <CardJumat />
        </div>
      </section>
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
