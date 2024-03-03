/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllCelebrityQuery } from "@/redux/features/Celebrity/celebrityApi";
import Spinner from "../Spinner/Spinner";
import { CelebrityCard } from "./CelebrityCard";

type TSlider = {
  currentSlider: any;
  handleDotClick?: any;
  data: any;
};

export const CelebritySlider = ({
  currentSlider,
  data,
  handleDotClick,
}: TSlider) => {
  const { data: allCelebrity, isLoading } = useGetAllCelebrityQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div className="my-6 relative overflow-hidden ">
      <div className="">
        <div className="ease-linear duration-300 flex gap-[2%]">
          {data?.map((item: any, i: number) => (
            <div
              key={i}
              style={{
                transform: `translateX(-${
                  currentSlider * (isSmallScreen ? 100 : 40)
                }%)`,
              }}
              className="lg:min-w-[20%] min-w-[50%] w h-fit bg-black/30 relative duration-200"
            >
              <CelebrityCard data={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex lg:hidden items-center justify-center w-full mt-6">
        {allCelebrity?.data?.slice(0, 8).map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-1 size-3 rounded-full ${
              currentSlider === index ? "bg-white" : "bg-[#a3a3a36d] "
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CelebritySlider;
