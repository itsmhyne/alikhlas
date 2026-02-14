type sectionProps = {
  text: string;
};

export default function HeroSection({ text }: sectionProps) {
  return (
    <div className=" h-50 w-full bg-hero relative">
      {/* <div className="absolute inset-0 bg-linear-to-l from-black/0 via-black/50 to-black/70 z-10"></div> */}
      <div className="container mx-auto  h-full flex justify-center items-center px-0 md:px-12.5">
        <div className="z-20 text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center max-w-152">
          <h3 className="bodymedium text-white font-bold text-shadow-lg">
            {text}
          </h3>
          <p className="labelsmall text-white mt-2">
            Masjid Al-Ikhlas Kesamben
          </p>
        </div>
      </div>
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
