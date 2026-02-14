import Image from "next/image";
export default function ImageZoom() {
  return (
    <div className="relative w-50 h-50 lg:w-62.5 lg:h-62.5 overflow-hidden rounded-xl group">
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
