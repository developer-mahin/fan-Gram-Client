import hashTag from "@/assets/hasTag.png";
import { Input } from "@/components/ui/input";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 items-center  gap-12 h-[90vh]">
      <div className="">
        <img className="w-[363px]" src={hashTag} alt="" />
        <h2 className="w-[750px] font-bold text-[55px] text-white leading-[60px]">
          We make your favourite celebritiestalk to you, personally.
        </h2>
        <Input className="bg-transparent rounded-full" />
      </div>
      <div className="">
        <img className="w-[363px]" src={hashTag} alt="" />
        <h2 className="w-[750px] font-bold text-[55px] text-white leading-[60px]">
          We make your favourite celebritiestalk to you, personally.
        </h2>
        <Input  className="bg-transparent rounded-full w-full" />
      </div>
    </div>
  );
};

export default Banner;
