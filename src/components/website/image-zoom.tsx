import Image from "next/image";
export default function ImageZoom() {
  return (
    <div className="relative w-43.75 h-43.75 md:w-45.5 md:h-45.5 lg:w-60 lg:h-60 overflow-hidden rounded-xl group">
      <Image
        src="/img/svg/x250.svg"
        alt="img"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
