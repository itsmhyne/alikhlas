import { ArrowRight, Building2 } from "lucide-react";

export default function CardPengumuman() {
  return (
    <div className="flex flex-col">
      <div className="icon bg-emerald-700 text-white p-2 rounded-md w-fit">
        <Building2 />
      </div>
      <h4 className="bodylarge my-2 font-bold">Pembangunan</h4>
      <p className="bodysmall">
        Pembangunan gapuran depan masjid dan perbaikan akses jalan ke masjid
        agar lebih baik. Penambahan kran air didepan masjid, yang akan dilakukan
        pada tanggal 1 Januari 2026 sampai 20 Januari 2026. Dimulai pukul 7
        pagi, sampai waktu sebelum dhuhur.
      </p>
      <div className="flex items-center gap-1 labelsmall font-bold text-emerald-700 mt-2.5">
        <h6>Lihat Selengkapnya</h6>
        <ArrowRight />
      </div>
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
