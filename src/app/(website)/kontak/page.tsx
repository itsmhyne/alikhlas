import HeroSection from "@/components/website/hero-section";
import { Building2, MailIcon, PhoneCallIcon } from "lucide-react";

export default function KontakPage() {
  return (
    <div>
      <section id="sholat">
        <HeroSection text={"Kontak"} />
      </section>
      <section className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="left">
            <h1 className="font-extrabold heading1">Get in touch</h1>
            <p className="bodysmall mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              doloribus laboriosam animi nesciunt nostrum est dolorum id
              facilis, iure quam in ex corporis nemo qui expedita. Quisquam illo
              fugiat necessitatibus error similique hic unde? Dicta dolorem
              sapiente facere quam, nemo error ea dolores quod voluptatibus
              ipsum nam id veniam ab.
            </p>
            <div className="flex mt-5">
              <Building2 />
              <p className="bodysmall ml-2.5">
                Jl.Dieng No.11, Dusun Tuwuhrejo, Kecamatan Kesamben
              </p>
            </div>
            <div className="flex mt-5">
              <PhoneCallIcon />
              <p className="bodysmall ml-2.5">089872637281</p>
            </div>
            <div className="flex mt-5">
              <MailIcon />
              <p className="bodysmall ml-2.5">alislamosque@gmail.com</p>
            </div>
          </div>
          <div className="right">
            <h3>form</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
