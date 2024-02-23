/* eslint-disable @typescript-eslint/no-unused-vars */
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import playIcon from "../../assets/video.png";
import SectionTitle from "../Common/SectionTitle";

const OutLetestWork = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <SectionTitle>0ur Latest Work</SectionTitle>
        <div className="flex items-center gap-5">
          <button className="size-12 rounded-full bg-transparent flex items-center justify-center border border-primary ">
            <IoIosArrowBack className="text-primary size-6" />
          </button>
          <button className="size-12 rounded-full bg-primary flex items-center justify-center border border-primary ">
            <IoIosArrowForward className="text-white size-6" />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mt-[42px]">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <div key={index}>
              <div className="bg-[#D9D9D9] w-full h-[300px] flex items-center justify-center rounded-xl">
                <div className="flex items-center justify-center">
                  <img className="size-[85px]" src={playIcon} alt="" />
                </div>
              </div>
              <p className="text-white mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OutLetestWork;
