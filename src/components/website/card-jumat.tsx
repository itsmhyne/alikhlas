import { Clock12Icon, LucideUsers2, Users2Icon } from "lucide-react";

export default function CardJumat() {
  const data = [
    {
      hari: "Wage",
      khotib: "Siswanto",
      bilal: "M. Hamdan Yusuf",
    },
    {
      hari: "Legi",
      khotib: "test",
      bilal: "test",
    },
    {
      hari: "Pon",
      khotib: "test",
      bilal: "test",
    },
    {
      hari: "Kliwon",
      khotib: "test",
      bilal: "test",
    },
    {
      hari: "Pahing",
      khotib: "test",
      bilal: "test",
    },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-emerald-400 rounded-lg overflow-hidden">
        <thead className="bg-emerald-700 text-white">
          <tr>
            <th className="text-center px-4 py-3 bodysmall border-b">Jumat</th>
            <th className="text-center px-4 py-3 bodysmall border-b">Khotib</th>
            <th className="text-center px-4 py-3 bodysmall border-b">Bilal</th>
          </tr>
        </thead>

        <tbody>
          {data.map((jadwal, key) => (
            <tr key={key} className="hover:bg-emerald-100 transition-colors">
              <td className="px-4 py-3 labelsmall border-b border-gray-300">
                {jadwal.hari}
              </td>
              <td className="px-4 py-3 labelsmall border-b border-gray-300">
                {jadwal.khotib}
              </td>
              <td className="px-4 py-3 labelsmall border-b border-gray-300">
                {jadwal.bilal}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <td className="text-xs text-left text-emerald-900 font-medium p-4">
            *cadangan : Fachdum Priyono(Khotib)
          </td>
        </tfoot>
      </table>
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
