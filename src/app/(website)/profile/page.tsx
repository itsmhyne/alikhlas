import HeroSection from "@/components/website/hero-section";
import ImageZoom from "@/components/website/image-zoom";
import PreTitle from "@/components/website/pre-title";

export default function ProfilePage() {
  return (
    <div>
      <section id="hero">
        <HeroSection text={"Profile Masjid"} />
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
        {/* <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 gap-4">
          <div className="lg:row-span-2 lg:col-start-5 lg:row-start-1">
            <ImageZoom />
          </div>
          <div className="lg:row-span-2 lg:col-start-4 lg:row-start-2">
            <ImageZoom />
          </div>
          <div className="lg:row-span-2 lg:col-start-5 lg:row-start-3">
            <ImageZoom />
          </div>
          <div className="lg:row-span-2 lg:col-start-4 lg:row-start-4">
            <ImageZoom />
          </div>
          <div className="lg:col-span-3 lg:row-span-5 lg:col-start-1 lg:row-start-1">
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
        </div> */}
      </section>
    </div>
  );
}
// Author : M. Hamdan Yusuf 😎
