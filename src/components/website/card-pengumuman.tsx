import {
  ArrowRight,
  BanknoteIcon,
  BookOpenText,
  Building2,
} from "lucide-react";

export default function CardPengumuman() {
  const pengumuman = [
    {
      icon: <Building2 />,
      type: "Pembangunan",
      note: "Pembangunan gapuran depan masjid dan perbaikan akses jalan ke masjid agar lebih baik. Penambahan kran air didepan masjid, yang akan dilakukan pada tanggal 1 Januari 2026 - 20 Januari 2026. Dimulai pukul 7 pagi,sampai waktu sebelum dhuhur.",
    },
    {
      icon: <BookOpenText />,
      type: "Khotmil Qur'an",
      note: "Berhubungan dekatnya bulan ramadhan, takmir masjid akan menagdakan khotmil qur'an. Acara akan dilaksanakan pada tanggal 10 Febreuari 2026 di Masjid Al-Ikhlas pukul 6 pagi - selesai.",
    },
    {
      icon: <BanknoteIcon />,
      type: "Kas Masjid",
      note: "Kas masjid per tanggal 1 februari mencapai 150.000.000 rupiah. Semoga kita senantiasa diberikan rahmat serta hidayah dari Allah SWT.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mt-10">
      {pengumuman.map((item, key) => (
        <div className="flex flex-col" key={key}>
          <div className="icon bg-emerald-700 text-white p-2 rounded-md w-fit">
            {item.icon}
          </div>
          <h4 className="bodylarge my-2 font-bold">{item.type}</h4>
          <p className="labelsmall">{item.note}</p>
          <div className="flex items-center gap-1 labelsmall font-bold text-emerald-700 mt-2.5">
            <h6>Lihat Selengkapnya</h6>
            <ArrowRight />
          </div>
        </div>
      ))}
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
