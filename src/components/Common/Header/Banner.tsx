import allu from "@/assets/allu.jpg";
import hashTag from "@/assets/hasTag.png";
import jacklin from "@/assets/jacklin.jpg";
import salman from "@/assets/salman.jpg";
import silpa from "@/assets/silpa.jpg";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const Banner = () => {
  const images = [silpa, jacklin, salman, allu];

  return (
    <div className="flex lg:flex-row flex-col-reverse items-center gap-12 lg:h-[90vh] h-fit">
      <div className="">
        <img className="lg:w-[363px] w-[200px]" src={hashTag} alt="" />
        <h2 className="lg:w-[750px] w-full font-bold lg:text-[55px] text-3xl text-white lg:leading-[60px] leading-[40px]">
          We make your favourite celebritiestalk to you, personally.
        </h2>
        <div className="relative">
          <SearchIcon className="size-6 text-white absolute left-2.5 top-3" />
          <Input
            placeholder="Search Your Favourite creator"
            className="bg-transparent rounded-full mt-8 lg:w-[545px] focus:outline-none text-white placeholder:text-white h-[50px] pl-12"
          />
          <Button className="bg-primary hover:bg-primary rounded-full absolute lg:right-[210px] right-2 top-1 px-8">
            Search
          </Button>
        </div>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
        className=""
      >
        <CarouselContent className="rounded-xl">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-2 gap-6 [&>*:nth-child(odd)]:-mt-14  lg:mt-10 mt-20">
                {images.map((item, i) => (
                  <div key={i}>
                    <img
                      className="rounded-[15px] lg:w-[310px] w-full lg:h-[300px] h-auto"
                      src={item}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Banner;
