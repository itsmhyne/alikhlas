"use client";

import { useEffect, useState } from "react";

type Jadwal = {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

export default function JadwalSholat() {
  const [jadwal, setJadwal] = useState<Jadwal | null>(null);

  useEffect(() => {
    fetch(
      "https://api.aladhan.com/v1/timingsByCity?city=Blitar&country=Indonesia&method=2"
    )
      .then((res) => res.json())
      .then((data) => {
        setJadwal(data.data.timings);
      });
  }, []);

  if (!jadwal) return <p>Loading jadwal sholat...</p>;

  return (
    <div className="stats grid grid-cols-5  bg-emerald-700 rounded-lg">
      <div className="border border-white flex flex-col items-center gap-2.5 p-5">
        <h4 className="text-white font-medium labelsmall lg:bodymedium">
          Isya'
        </h4>
        <h2 className="bodymedium lg:heading2 font-bold text-white">
          {jadwal.Isha} WIB
        </h2>
      </div>
      <div className="border border-white flex flex-col items-center gap-2.5 p-5">
        <h4 className="text-white font-medium labelsmall lg:bodymedium">
          Subuh
        </h4>
        <h2 className="bodymedium lg:heading2 font-bold text-white">
          {jadwal.Fajr} WIB
        </h2>
      </div>
      <div className="border border-white flex flex-col items-center gap-2.5 p-5">
        <h4 className="text-white font-medium labelsmall lg:bodymedium">
          Dhuhur
        </h4>
        <h2 className="bodymedium lg:heading2 font-bold text-white">
          {jadwal.Dhuhr} WIB
        </h2>
      </div>
      <div className="border border-white flex flex-col items-center gap-2.5 p-5">
        <h4 className="text-white font-medium labelsmall lg:bodymedium">
          Ashar
        </h4>
        <h2 className="bodymedium lg:heading2 font-bold text-white">
          {jadwal.Asr} WIB
        </h2>
      </div>
      <div className="border border-white flex flex-col items-center gap-2.5 p-5">
        <h4 className="text-white font-medium labelsmall lg:bodymedium">
          Magrib
        </h4>
        <h2 className="bodymedium lg:heading2 font-bold text-white">
          {jadwal.Maghrib} WIB
        </h2>
      </div>
    </div>
    // <div className="stats grid grid-cols-5  bg-emerald-700 rounded-lg">
    //   <div className="border border-white flex flex-col gap-2.5 p-5">
    //     <h4 className="text-white font-medium bodymedium">Isya'</h4>
    //     <h2 className="heading2 font-bold text-white">{jadwal.Isha} WIB</h2>
    //   </div>
    //   <div className="border border-white flex flex-col gap-2.5 p-5">
    //     <h4 className="text-white font-medium bodymedium">Subuh</h4>
    //     <h2 className="heading2 font-bold text-white">{jadwal.Fajr} WIB</h2>
    //   </div>
    //   <div className="border border-white flex flex-col gap-2.5 p-5">
    //     <h4 className="text-white font-medium bodymedium">Dhuhur</h4>
    //     <h2 className="heading2 font-bold text-white">{jadwal.Dhuhr} WIB</h2>
    //   </div>
    //   <div className="border border-white flex flex-col gap-2.5 p-5">
    //     <h4 className="text-white font-medium bodymedium">Ashar</h4>
    //     <h2 className="heading2 font-bold text-white">{jadwal.Asr} WIB</h2>
    //   </div>
    //   <div className="border border-white flex flex-col gap-2.5 p-5">
    //     <h4 className="text-white font-medium bodymedium">Magrib</h4>
    //     <h2 className="heading2 font-bold text-white">{jadwal.Maghrib} WIB</h2>
    //   </div>
    // </div>
  );
}
