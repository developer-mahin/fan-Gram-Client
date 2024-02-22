import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SectionTitle from "../Common/SectionTitle";

const Brands = () => {
  return (
    <div className="flex items-center justify-between py-10">
      <SectionTitle>Brands which love us</SectionTitle>
      <div className="flex items-center gap-5">
        <button className="size-12 rounded-full bg-transparent flex items-center justify-center border border-primary ">
          <IoIosArrowBack className="text-primary size-6" />
        </button>
        <button className="size-12 rounded-full bg-primary flex items-center justify-center border border-primary ">
          <IoIosArrowForward className="text-white size-6" />
        </button>
      </div>
    </div>
  );
};

export default Brands;
