import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import promote from "../../assets/image 16.png";
import Autoplay from "embla-carousel-autoplay";

const PromoteBusiness = () => {
  return (
    <div className="w-[90%] mx-auto flex justify-around items-center gap-6 my-6 py-4 rounded-xl bg-[#FCAE4B]">
      <div className="text-white space-y-4">
        <h3 className="text-2xl">
          Promote Your Business <br /> through <span>celebrity</span>
        </h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          exercitationem, <br /> dolorem aliquam sapiente illum eum neque minus
          tenetur nulla odit?
        </p>
        <Button className="bg-white hover:bg-white text-[#D94489] rounded-2xl px-6 ml-4">
          Fill The Form
        </Button>
      </div>
      <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-xs"
        >
          <CarouselContent className="rounded-xl">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img
                    className="w-[70%] h-[20%] rounded-xl"
                    src={promote}
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
    </div>
  );
};

export default PromoteBusiness;
