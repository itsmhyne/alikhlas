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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center">
      <div className="font-bold">Hari</div>
      <div className="bodymedium">Hari</div>
      <div className="bodymedium">Hari</div>
      <hr />
      <hr />
      <hr />
      {data.map((item, key) => (
        <p>yuhu</p>
      ))}
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
