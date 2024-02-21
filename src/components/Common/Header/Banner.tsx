import allu from "@/assets/allu.jpg";
import hashTag from "@/assets/hasTag.png";
import jacklin from "@/assets/jacklin.jpg";
import salman from "@/assets/salman.jpg";
import silpa from "@/assets/silpa.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Banner = () => {
  const images = [silpa, jacklin, salman, allu];

  return (
    <div className="flex lg:flex-row flex-col-reverse items-center gap-12 h-[90vh]">
      <div className="">
        <img className="lg:w-[363px]" src={hashTag} alt="" />
        <h2 className="lg:w-[750px] font-bold text-[55px] text-white leading-[60px]">
          We make your favourite celebritiestalk to you, personally.
        </h2>
        <div className="relative">
          <SearchIcon className="size-6 text-white absolute left-2.5 top-3" />
          <Input
            placeholder="Search Your Favourite creator"
            className="bg-transparent rounded-full mt-8 w-[545px] focus:outline-none text-white placeholder:text-white h-[50px] pl-12"
          />
          <Button className="bg-primary hover:bg-primary rounded-full absolute right-36 top-1 px-8">
            Search
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:[&>*:nth-child(odd)]:-mt-14 lg:mt-10">
        {images.map((item, i) => (
          <div key={i}>
            <img
              className="rounded-[15px] lg:w-[310px] w-[147px] lg:h-[300px] h-[152px]"
              src={item}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
