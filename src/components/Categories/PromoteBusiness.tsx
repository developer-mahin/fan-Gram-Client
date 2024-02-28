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
        "flex w-full lg:flex-row-reverse flex-col justify-between items-center gap-6 ",
        className
      )}
    >
      <div>
        <div className="flex justify-center md:flex-none">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full lg:max-w-md max-w-xl"
          >
            <CarouselContent className="rounded-xl">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex items-center justify-center">
                    <img
                      className="lg:w-[432px] w-[150px] lg:h-[255px] rounded-xl object-cover"
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
        <h2
          style={{
            fontFamily: "'Satisfy', cursive",
          }}
          className="text-center font-medium"
        >
          # Munmun datta
        </h2>
      </div>

      <div className="text-white space-y-1">
        <h3 className="lg:text-[45px] text-lg lg:text-start text-center lg:leading-[50px] font-bold">
          Promote Your Business <br className="lg:block hidden" /> through{" "}
          <span className="text-black">celebrity</span>
        </h3>

        <p className="lg:text-base text-sm lg:text-start text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          exercitationem, <br className="lg:block hidden" /> dolorem aliquam
          sapiente illum eum neque minus tenetur nulla odit?
        </p>
        <Button className="bg-white hover:bg-white text-primary block mx-auto lg:mx-0 rounded-full px-6 lg:ml-4">
          Fill The Form
        </Button>
      </div>
    </div>
  );
};

export default PromoteBusiness;
promote;
