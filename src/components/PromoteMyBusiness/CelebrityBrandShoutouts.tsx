import Autoplay from "embla-carousel-autoplay";
import SectionTitle from "../Common/SectionTitle";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const CelebrityBrandShoutouts = () => {
  return (
    <div className="py-12">
      <SectionTitle className="text-center">
        Celebrity Brand Shoutouts
      </SectionTitle>

      <div className="lg:grid lg:grid-cols-5 gap-x-5 lg:gap-y-0 gap-y-6 lg:[&>*:nth-child(even)]:mt-[30px] mt-20 hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-[388px]  rounded-xl bg-gradient-to-t from-[#D84388]  to-[#D9D9D9] "
          ></div>
        ))}
      </div>

      <div className="lg:grid lg:grid-cols-5 gap-x-5 lg:gap-y-0 gap-y-6 lg:[&>*:nth-child(even)]:mt-[30px] lg:mt-0 mt-6 hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-[388px]  rounded-xl bg-gradient-to-t from-[#D84388]  to-[#D9D9D9] "
          ></div>
        ))}
      </div>

      <div className="lg:hidden block mt-6">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="rounded-xl">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div
                  key={index}
                  className="w-full h-[388px]  rounded-xl bg-gradient-to-t from-[#D84388]  to-[#D9D9D9] "
                ></div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <SectionTitle className="font-normal text-center mt-20">
        1000+ brands • 850 mn+ reach
      </SectionTitle>
    </div>
  );
};

export default CelebrityBrandShoutouts;
