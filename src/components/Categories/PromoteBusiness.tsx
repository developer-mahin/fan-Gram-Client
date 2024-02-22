/* eslint-disable @typescript-eslint/no-explicit-any */
import girl from "@/assets/image 16.png";
import promote from "@/assets/promot.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";

type TPromoteBusiness = {
  className?: string;
};

const PromoteBusiness = ({ className }: TPromoteBusiness) => {
  const style = {
    backgroundImage: `url(${promote})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={style}
      className={cn(
        "md:flex flex-row-reverse items-center gap-6 p-4 ",
        className
      )}
    >
      <div className="flex justify-center md:flex-none">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-md"
        >
          <CarouselContent className="rounded-xl">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img
                    className="w-[432px] h-[255px] rounded-xl"
                    src={girl}
                    alt=""
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>

      <div className="text-white space-y-4">
        <h3 className="text-[45px] leading-[50px] font-bold">
          Promote Your Business <br /> through{" "}
          <span className="text-black">celebrity</span>
        </h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          exercitationem, <br /> dolorem aliquam sapiente illum eum neque minus
          tenetur nulla odit?
        </p>
        <Button className="bg-white hover:bg-white text-primary block mx-auto lg:mx-0 rounded-full px-6  lg:ml-4">
          Fill The Form
        </Button>
      </div>
    </div>
  );
};

export default PromoteBusiness;
