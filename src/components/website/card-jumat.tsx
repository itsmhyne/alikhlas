import { Clock12Icon, LucideUsers2 } from "lucide-react";

export default function CardJumat() {
  const data = [
    {
      hari: "Jumat Wage",
      khotib: "test",
      bilal: "test",
    },
    {
      hari: "Jumat Legi",
      khotib: "test",
      bilal: "test",
    },
    {
      hari: "Jumat Pon",
      khotib: "test",
      bilal: "test",
    },
    {
      hari: "Jumat Kliwon",
      khotib: "test",
      bilal: "test",
    },
    {
      hari: "Jumat Pahing",
      khotib: "test",
      bilal: "test",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, key) => (
        <div
          className="grid gap-2.5 border border-slate-300 rounded-xl p-5
    "
          key={key}
        >
          <div className="flex items-center gap-2.5">
            <div className="bg-emerald-700 rounded-xl p-4 w-fit">
              <LucideUsers2 className="text-emerald-300" />
            </div>
            <h6 className="bodymedium font-bold text-emerald-700">
              {item.hari}
            </h6>
          </div>
          <div className="flex flex-col">
            <h6 className="bodymedium font-semibold">Khatib</h6>
            <p className="font-light bodysmall">{item.khotib}</p>
          </div>
          <div className="flex flex-col">
            <h6 className="bodymedium font-semibold">Bilal</h6>
            <p className="font-light bodysmall">{item.bilal}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
