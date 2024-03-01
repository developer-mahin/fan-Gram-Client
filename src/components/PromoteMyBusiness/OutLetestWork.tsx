/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SectionTitle from "../Common/SectionTitle";
import { useAllLatestWorkQuery } from "@/redux/features/latestWork/latestWorkApi";
import Spinner from "../Spinner/Spinner";

const OutLetestWork = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const { data: latestWorks, isLoading } = useAllLatestWorkQuery(undefined);

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? latestWorks.data.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === latestWorks.data.length - 1 ? 0 : currentSlider + 1
    );

  const isSmallScreen = window.innerWidth <= 768;

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="flex items-center justify-between">
        <SectionTitle>0ur Latest Work</SectionTitle>
        <div className="flex items-center gap-5">
          <button
            onClick={prevSlider}
            className="size-12 rounded-full bg-transparent flex items-center justify-center border border-primary "
          >
            <IoIosArrowBack className="text-primary size-6" />
          </button>
          <button
            onClick={nextSlider}
            className="size-12 rounded-full bg-primary flex items-center justify-center border border-primary "
          >
            <IoIosArrowForward className="text-white size-6" />
          </button>
        </div>
      </div>

      <div className="my-6 relative overflow-hidden">
        <div className="ease-linear duration-300 flex gap-[2%]">
          {latestWorks?.data?.map((item: any, i: number) => (
            <div
              className="lg:min-w-[31.5%] min-w-[100%]  h-fit bg-black/30 relative duration-200"
              style={{
                transform: `translateX(-${
                  currentSlider * (isSmallScreen ? 100 : 35)
                }%)`,
              }}
            >
              <div key={i}>
                <div className="bg-[#D9D9D9] w-full h-[300px] flex items-center justify-center rounded-xl">
                  <div className="flex items-center justify-center">
                    <video controls className="w-full">
                      <source
                        src={`http://localhost:5000/uploads/${item.path}`}
                      />
                    </video>
                  </div>
                </div>
                <p className="text-white mt-4">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutLetestWork;
