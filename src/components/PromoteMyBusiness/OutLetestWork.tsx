/* eslint-disable @typescript-eslint/no-unused-vars */
import playIcon from "@/assets/video.png";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SectionTitle from "../Common/SectionTitle";

const availableData = [
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: playIcon,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const OutLetestWork = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? availableData.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === availableData.length - 1 ? 0 : currentSlider + 1
    );

  const isSmallScreen = window.innerWidth <= 768;

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
          {availableData?.map((item, i) => (
            <div
              className="lg:min-w-[31.5%] min-w-[100%]  h-fit bg-black/30 relative duration-200"
              style={{
                transform: `translateX(-${
                  currentSlider * (isSmallScreen ? 100 : 50)
                }%)`,
              }}
            >
              <div key={i}>
                <div className="bg-[#D9D9D9] w-full h-[300px] flex items-center justify-center rounded-xl">
                  <div className="flex items-center justify-center">
                    <img className="size-[85px]" src={playIcon} alt="" />
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
