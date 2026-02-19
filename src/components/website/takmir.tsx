import Image from "next/image";

export default function Takmir() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="relative w-25 h-25 overflow-hidden rounded-full group">
        <Image
          src="/img/svg/x250.svg"
          alt="img"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="bodysmall text-emerald-700 font-bold">Jhon Doe</span>
        <span className="text-xs opacity-75">Anggota</span>
      </div>
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
