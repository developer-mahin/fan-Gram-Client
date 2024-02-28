import { additionalBenefits, businessData } from "@/Data/BusinessWorks";
import SectionTitle from "../Common/SectionTitle";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const BusinessWork = () => {
  return (
    <div className="lg:py-12">
      <SectionTitle className="text-center">
        How does Fanrang for Business Work?
      </SectionTitle>
      <div className="lg:grid hidden lg:grid-cols-3 gap-x-5 mt-20 gap-y-20">
        {businessData.map((data, i) => {
          return (
            <div
              key={i}
              className="bg-[#292929] px-10 py-4 rounded-2xl space-y-2"
            >
              <div className="flex items-center justify-center -mt-16">
                <img src={data.img} className="size-[110px]" alt="" />
              </div>

              <div className="text-center space-y-1 space-x-1">
                <h4 className="text-xl font-semibold text-white">
                  {data.title}
                </h4>
                <p className="text-sm text-[#8E8E8E] font-medium">{data.des}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="lg:hidden block mt-6">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="rounded-xl pt-16">
            {businessData.map((data, index) => (
              <CarouselItem key={index}>
                <div className="bg-[#292929] px-10 py-4 rounded-2xl space-y-2">
                  <div className="flex items-center justify-center -mt-16 z-50">
                    <img src={data.img} className="size-[110px] " alt="" />
                  </div>

                  <div className="text-center space-y-1 space-x-1">
                    <h4 className="text-xl font-semibold text-white">
                      {data.title}
                    </h4>
                    <p className="text-sm text-[#8E8E8E] font-medium">
                      {data.des}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div>
        <p className="text-primary text-2xl text-center underline cursor-pointer my-10">
          Click here to see additional benefits
        </p>

        <div className="lg:grid hidden lg:grid-cols-4 gap-4">
          {additionalBenefits.map((data, i) => {
            return (
              <div
                key={i}
                className="border border-gray-600 rounded-2xl p-4 space-y-1"
              >
                <h5 className="text-white font-semibold">{data.title}</h5>
                <p className="text-xs text-[#8E8E8E] font-medium">{data.des}</p>
              </div>
            );
          })}
        </div>

        <div className="lg:hidden block mt-6">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3558,
              }),
            ]}
          >
            <CarouselContent className="rounded-xl ">
              {additionalBenefits.map((data, index) => (
                <CarouselItem key={index}>
                  <div className="border border-gray-600 rounded-2xl p-4 space-y-1">
                    <h5 className="text-white font-semibold">{data.title}</h5>
                    <p className="text-xs text-[#8E8E8E] font-medium">
                      {data.des}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="bg-primary lg:px-10 px-5 lg:py-12 py-5 rounded-2xl mt-12 flex items-center justify-between lg:gap-y-0 gap-y-3 lg:flex-row flex-col">
        <h2 className="text-2xl font-extrabold text-white lg:w-[824px] lg:text-start text-center">
          Want to grow your business?Book a free consultation session with our
          Dedicated Brand Representative
        </h2>
        <Button className="text-primary bg-white px-10 text-xl font-medium hover:bg-white rounded-full h-12">
          Contact us
        </Button>
      </div>
    </div>
  );
};

export default BusinessWork;
