/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllCelebrityQuery } from "@/redux/features/Celebrity/celebrityApi";
import { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CelebritySlider } from "../Common/CelebritySlider";
import FIconButton from "../Common/FIconButton";
import SectionTitle from "../Common/SectionTitle";
import Spinner from "../Spinner/Spinner";
import { Button } from "../ui/button";

export type TCeleb = {
  _id: number;
  name: string;
  img: string;
  tags: Array<string>;
  price: number;
  available: boolean;
};

const CelebrityCards = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [currentFanGramSlider, setCurrentFanGramSlider] = useState(0);

  const { data: allCelebrityData, isLoading } =
    useGetAllCelebrityQuery(undefined);

  const availableCeleb = allCelebrityData?.data?.filter(
    (celeb: any) => celeb.earlyResponse === true
  );
  const fanGramCeleb = allCelebrityData?.data?.filter(
    (celeb: any) => celeb.earlyResponse !== true
  );

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? availableCeleb?.length - 1 : currentSlider - 1
    );
  const prevFanGramSlider = () =>
    setCurrentFanGramSlider((currentFanGramSlider) =>
      currentFanGramSlider === 0
        ? fanGramCeleb.length - 1
        : currentFanGramSlider - 1
    );

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === availableCeleb?.length - 1 ? 0 : currentSlider + 1
      ),
    [availableCeleb?.length]
  );

  const nextFanGramSlider = useCallback(
    () =>
      setCurrentFanGramSlider((currentSlider) =>
        currentSlider === fanGramCeleb?.length - 1 ? 0 : currentSlider + 1
      ),
    [fanGramCeleb?.length]
  );

  const handleDotClick = (index: number) => {
    setCurrentSlider(index);
  };

  const handleDotClickFanGram = (index: number) => {
    setCurrentFanGramSlider(index);
  };

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    intervalId = setInterval(() => {
      nextFanGramSlider();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [nextSlider, nextFanGramSlider]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="space-y-8 ">
      <div className="">
        <div className="flex w-full justify-evenly">
          <div className="flex-grow flex justify-start">
            <SectionTitle className="text-white">
              Next Day Delivery
            </SectionTitle>
            <Button className="bg-transparent text-primary border rounded-full px-4 ml-4 hover:bg-transparent border-primary">
              See All
            </Button>
          </div>

          <div className="lg:flex hidden items-center gap-5">
            <FIconButton handler={prevSlider} Icon={IoIosArrowBack} />
            <FIconButton
              handler={nextSlider}
              Icon={IoIosArrowForward}
              className="bg-primary text-white"
              iconClass="text-white"
            />
          </div>
        </div>
        <CelebritySlider
          handleDotClick={handleDotClick}
          currentSlider={currentSlider}
          data={availableCeleb}
        ></CelebritySlider>
      </div>

      <div>
        <div>
          <div className="flex w-full justify-evenly">
            <div className="flex-grow flex justify-start">
              <SectionTitle className="text-white ">
                FanGram Dhamaka
              </SectionTitle>
              <Button className="bg-transparent hover:bg-transparent text-primary border rounded-full px-4 ml-4 border-primary">
                See All
              </Button>
            </div>
            <div className="lg:flex hidden items-center gap-5">
              <FIconButton handler={prevFanGramSlider} Icon={IoIosArrowBack} />
              <FIconButton
                handler={nextFanGramSlider}
                Icon={IoIosArrowForward}
                className="bg-primary text-white"
                iconClass="text-white"
              />
            </div>
          </div>
        </div>

        <CelebritySlider
          handleDotClick={handleDotClickFanGram}
          currentSlider={currentFanGramSlider}
          data={fanGramCeleb}
        ></CelebritySlider>
      </div>
    </div>
  );
};

export default CelebrityCards;
