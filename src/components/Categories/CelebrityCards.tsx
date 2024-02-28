import { data } from "@/Data/data";
import { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CelebritySlider } from "../Common/CelebritySlider";
import SectionTitle from "../Common/SectionTitle";
import { Button } from "../ui/button";

export type TCeleb = {
  _id: number;
  name: string;
  img: string;
  tags: Array<string>;
  price: number;
  available: boolean;
};

const availableCeleb = data?.filter((celeb) => celeb.available === true);
const fanGramCeleb = data?.filter((celeb) => celeb.available !== true);

const CelebrityCards = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [currentFanGramSlider, setCurrentFanGramSlider] = useState(0);

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? availableCeleb.length - 1 : currentSlider - 1
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
        currentSlider === availableCeleb.length - 1 ? 0 : currentSlider + 1
      ),
    []
  );

  const nextFanGramSlider = useCallback(
    () =>
      setCurrentFanGramSlider((currentSlider) =>
        currentSlider === fanGramCeleb.length - 1 ? 0 : currentSlider + 1
      ),
    []
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
              <button
                onClick={prevFanGramSlider}
                className="size-12 rounded-full bg-transparent flex items-center justify-center border border-primary "
              >
                <IoIosArrowBack className="text-primary size-6" />
              </button>
              <button
                onClick={nextFanGramSlider}
                className="size-12 rounded-full bg-primary flex items-center justify-center border border-primary "
              >
                <IoIosArrowForward className="text-white size-6" />
              </button>
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
