import HeroSection from "@/components/website/hero-section";
import ImageZoom from "@/components/website/image-zoom";
import PreTitle from "@/components/website/pre-title";
import Takmir from "@/components/website/takmir";

export default function ProfilePage() {
  const takmir = [
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
    { id: "1" },
  ];
  return (
    <div>
      <section id="hero">
        <HeroSection text={"Profile"} />
      </section>
      <section id="about" className="container mx-auto my-10 px-4">
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <div>
            <PreTitle text={"Tentang Masjid Al-Ikhlas"} />
            <p className="labelsmall p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              repudiandae facere sed iste maiores excepturi aperiam sequi
              tempora. Vitae magnam praesentium mollitia sed at quis fugit
              delectus ut, laboriosam impedit eligendi voluptatibus a modi ipsum
              doloremque, eius assumenda necessitatibus minima vero. Enim, sit
              soluta minus, sed illo dolor atque officiis nam labore
              voluptatibus dignissimos ratione repellendus sapiente fugit hic
              temporibus quis, dicta maiores eum? Aperiam consectetur eos totam
              excepturi rerum amet, labore ab magnam in impedit dolorum aut
              odit. Quo, tempore distinctio. Amet et culpa, sunt, nulla
              delectus, sequi tempora officiis magni facere consequuntur ab
              eveniet atque ullam! Accusamus, cupiditate!
            </p>
            <p className="labelsmall p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              repudiandae facere sed iste maiores excepturi aperiam sequi
              tempora. Vitae magnam praesentium mollitia sed at quis fugit
              delectus ut, laboriosam impedit eligendi voluptatibus a modi ipsum
              doloremque, eius assumenda necessitatibus minima vero. Enim, sit
              soluta minus, sed illo dolor atque officiis nam labore
              voluptatibus dignissimos ratione repellendus sapiente fugit hic
              temporibus quis, dicta maiores eum? Aperiam consectetur eos totam
              excepturi rerum amet, labore ab magnam in impedit dolorum aut
              odit. Quo, tempore distinctio. Amet et culpa, sunt, nulla
              delectus, sequi tempora officiis magni facere consequuntur ab
              eveniet atque ullam! Accusamus, cupiditate!
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 grid-rows-5 gap-x-4 gap-y-2 md:gap-x-5 lg:gap-y-3 lg:gap-x-4">
              <div className="row-span-2 col-start-2 place-items-center">
                <ImageZoom />
              </div>
              <div className="row-span-2 row-start-2 place-items-center ">
                <ImageZoom />
              </div>
              <div className="row-span-2 col-start-2 row-start-3 place-items-center">
                <ImageZoom />
              </div>
              <div className="row-span-2 row-start-4 place-items-center">
                <ImageZoom />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-10 px-4 flex flex-col justify-center items-center">
        <PreTitle text={"Takmir Masjid Al-Ikhlas"} center="justify-center" />
        <span className="labelsmall text-center">
          We're a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering
          <br />
          the best results for our clients.
        </span>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-5 lg:grid-cols-8 my-10 lg:gap-8">
          {takmir.map((item, key) => (
            <Takmir key={key} />
          ))}
        </div>
      </section>
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
