import { Button } from "@/components/ui/button";
import { WalletIcon } from "lucide-react";
import ButtonIcon from "./button-icon";
export default function Hero() {
  return (
    <div className=" h-130 w-full bg-hero relative">
      {/* <div className="absolute inset-0 bg-linear-to-l from-black/0 via-black/50 to-black/70 z-10"></div> */}
      <div className="container mx-auto  h-full flex items-center px-0 md:px-12.5">
        <div className="z-20 text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start max-w-152">
          <h1 className="heading1 text-emerald-400 font-extrabold shadow-2xs">
            Makmurkan Masjid
            <br />
            <span className="text-white">Makmurkan Ummat</span>
          </h1>
          <p className="bodysmall text-ellipsis text-white mt-10 py-4">
            Pusat Ibadah & Kegiatan Ummat
          </p>
          <div className="flex gap-2.5">
            <ButtonIcon text={"Donasi Sekarang"} icon={WalletIcon} />
            <button className="bg-white bodysmall text-emerald-700 p-4 rounded-xl">
              Jadwal Sholat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
