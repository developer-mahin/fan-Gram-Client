import extra1 from "@/assets/extra (2).png";
import extra2 from "@/assets/extra (1).png";
import extra3 from "@/assets/extra (3).png";
import extra4 from "@/assets/extra (4).png";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const Offers = ({ addOnCost }: { addOnCost?: Record<string, number> }) => {
  return (
    <div className="pt-10 pb-5">
      <h2 className="text-3xl text-white font-bold">Extras</h2>
      <div className="p-3 rounded-xl bg-gradient-to-r from-black to-[#202020]  mt-5 flex items-center justify-between">
        {addOnCost?.remove_logo && (
          <div className="flex lg:flex-row flex-col lg:justify-start w-full lg:items-center items-start lg:gap-8">
            <div className="bg-primary p-2 rounded-lg">
              <img className="size-[58px]" src={extra1} alt="" />
            </div>
            <div className=" flex justify-between items-center w-full">
              <div className="flex lg:mt-0 mt-4 flex-col gap-y-1">
                <h4 className="text-xl font-semibold text-white">
                  Remove the FanRang logo
                </h4>
                <p className="text-sm font-medium text-[#737373]">
                  Download your video without a tring watermark
                </p>
                <p className="text-[#737373] font-medium">
                  {addOnCost?.remove_logo}
                </p>
              </div>
              <div className="px-6 lg:mt-0 mt-4">
                <Button className="rounded-full p-0 size-8">
                  <Plus />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-3 rounded-xl bg-gradient-to-r from-black to-[#202020]  mt-5 flex items-center justify-between">
        {addOnCost?.effect && (
          <div className="flex lg:flex-row flex-col lg:justify-start w-full lg:items-center items-start lg:gap-8">
            <div className="bg-primary p-2 rounded-lg">
              <img className="size-[58px]" src={extra2} alt="" />
            </div>
            <div className=" flex justify-between items-center w-full">
              <div className="flex lg:mt-0 mt-4 flex-col gap-y-1">
                <h4 className="text-xl font-semibold text-white">
                  Gifting Experience
                </h4>
                <p className="text-sm font-medium text-[#737373]">
                  Gift wrap your video with special effects.
                </p>
                <p className="text-[#737373] font-medium">
                  {addOnCost?.remove_logo}
                </p>
              </div>
              <div className="px-6 lg:mt-0 mt-4">
                <Button className="rounded-full p-0 size-8">
                  <Plus />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-3 rounded-xl bg-gradient-to-r from-black to-[#202020]  mt-5 flex items-center justify-between">
        {addOnCost?.hd_video && (
          <div className="flex lg:flex-row flex-col lg:justify-start w-full lg:items-center items-start lg:gap-8">
            <div className="bg-primary p-2 rounded-lg">
              <img className="size-[58px]" src={extra3} alt="" />
            </div>
            <div className=" flex justify-between items-center w-full">
              <div className="flex lg:mt-0 mt-4 flex-col gap-y-1">
                <h4 className="text-xl font-semibold text-white">Full HD</h4>
                <p className="text-sm font-medium text-[#737373]">
                  Video is recorded with full HD 1080x1920. Pick this if the
                  video quality is extra important.
                </p>
                <p className="text-[#737373] font-medium">
                  {addOnCost?.hd_video}
                </p>
              </div>
              <div className="px-6 lg:mt-0 mt-4">
                <Button className="rounded-full p-0 size-8">
                  <Plus />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-3 rounded-xl bg-gradient-to-r from-black to-[#202020]  mt-5 flex items-center justify-between">
        {addOnCost?.dmDiscount && (
          <div className="flex lg:flex-row flex-col lg:justify-start w-full lg:items-center items-start lg:gap-8">
            <div className="bg-primary p-2 rounded-lg">
              <img className="size-[58px]" src={extra4} alt="" />
            </div>
            <div className=" flex justify-between items-center w-full">
              <div className="flex lg:mt-0 mt-4 flex-col gap-y-1">
                <h4 className="text-xl font-semibold text-white">
                  Dm On Instagram
                </h4>
                <p className="text-sm font-medium text-[#737373]">
                  Want To Add on your Order
                </p>
                <p className="text-[#737373] font-medium">
                  {addOnCost?.dmDiscount}
                </p>
              </div>
              <div className="px-6 lg:mt-0 mt-4">
                <Button className="rounded-full p-0 size-8">
                  <Plus />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div>
          {extra.map((data, i) => {
            return (
              <div
                key={i}
                className="p-3 rounded-xl bg-gradient-to-r from-black to-[#202020] mt-5 flex items-center justify-between"
              >
                <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-5">
                  <div className="bg-primary p-2 rounded-lg">
                    <img className="size-[58px]" src={data.img} alt="" />
                  </div>
                  <div className="flex lg:mt-0 mt-4 flex-col gap-y-1">
                    <h4 className="text-xl font-semibold text-white">
                      {data.title}
                    </h4>
                    <p className="text-sm font-medium text-[#737373]">
                      {data.des}
                    </p>
                    <p className="text-[#737373] font-medium">
                      {data.price}
                    </p>
                  </div>
                </div>
                <div className="px-6 lg:mt-0 mt-4 ">
                  <Button className="rounded-full p-0 size-8">
                    <Plus />
                  </Button>
                </div>
              </div>
            );
          })}
        </div> */}
    </div>
  );
};

export default Offers;
