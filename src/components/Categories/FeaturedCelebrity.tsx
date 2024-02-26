import { celebraty } from "@/Data/celebratyData";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FeaturedCelebrity = () => {
  return (
    <>
      <div className="lg:my-20   my-10 relative">
        <div className="lg:block hidden">
          <Carousel className="w-full ">
            <CarouselContent className="bg-[#000000]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-[#000000] border-none">
                      <CardContent className=" p-0">
                        <div className="grid lg:grid-cols-5 grid-cols-1 gap-x-6 lg:gap-y-0 gap-y-6 lg:[&>*:nth-child(even)]:mt-[30px] lg:[&>*:nth-child(odd)]:pb-8">
                          {celebraty.slice(0, 5).map((item, i) => (
                            <div key={i}>
                              <div
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                  height: "446px",
                                  width: "100%",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                  borderRadius: "15px",
                                }}
                                className="relative"
                              >
                                <div className="bg-primary py-4 pr-2 pl-[21px] absolute bottom-0 w-full rounded-tl-[30px] rounded-bl-[15px] rounded-br-[15px]">
                                  <h2 className="text-2xl text-white font-bold pr-2">
                                    {item.name}
                                  </h2>
                                  <h2 className="text-white">{item.hashTag}</h2>
                                  <div className="flex items-center justify-between gap-2 mt-3">
                                    <p className="text-sm font-bold text-white">
                                      Starting From {item.price}
                                    </p>
                                    <Button
                                      size="sm"
                                      className="bg-white text-primary hover:bg-white rounded-full font-medium"
                                    >
                                      Book Now
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="grid lg:grid-cols-5 grid-cols-1 gap-x-6 lg:gap-y-0 gap-y-6 lg:[&>*:nth-child(even)]:mt-[30px] lg:[&>*:nth-child(odd)]:pb-8">
                          {celebraty.slice(5, 10).map((item, i) => (
                            <div key={i}>
                              <div
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                  height: "446px",
                                  width: "100%",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                  borderRadius: "15px",
                                }}
                                className="relative"
                              >
                                <div className="bg-primary py-4 pr-2 pl-[21px] absolute bottom-0 w-full rounded-tl-[30px] rounded-bl-[15px] rounded-br-[15px]">
                                  <h2 className="text-2xl text-white font-bold pr-2">
                                    {item.name}
                                  </h2>
                                  <h2 className="text-white">{item.hashTag}</h2>
                                  <div className="flex items-center justify-between gap-2 mt-3">
                                    <p className="text-sm font-bold text-white">
                                      Starting From {item.price}
                                    </p>
                                    <Button
                                      size="sm"
                                      className="bg-white text-primary hover:bg-white rounded-full font-medium"
                                    >
                                      Book Now
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="lg:block hidden">
              <CarouselPrevious className="bg-primary hover:bg-primary hover:text-white border-primary text-white " />
              <CarouselNext className="bg-primary hover:bg-primary hover:text-white border-primary text-white " />
            </div>
          </Carousel>
        </div>

        <div className="lg:hidden block">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className=""
          >
            <CarouselContent className="rounded-xl">
              {celebraty.map((item, index) => (
                <CarouselItem key={index}>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      height: "446px",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "15px",
                    }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-t from-[#A92DA9] to-transparent  absolute bottom-0 w-full px-4 pb-4 pt-40 rounded-bl-[15px] rounded-br-[15px]">
                      <h2 className="text-2xl text-white font-bold pr-2">
                        {item.name}
                      </h2>
                      <h2 className="text-white">{item.hashTag}</h2>
                      <div className="flex items-center justify-between gap-2 mt-3">
                        <p className="text-sm font-bold text-white">
                          Starting From {item.price}
                        </p>
                        <Button
                          size="sm"
                          className="bg-white text-primary hover:bg-white rounded-full font-medium"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default FeaturedCelebrity;
