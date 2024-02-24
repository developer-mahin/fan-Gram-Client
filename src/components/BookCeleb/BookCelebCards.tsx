import { CelebritySlider } from "../Common/CelebritySlider";
import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { data } from "@/FakeData/data";
import { CelebrityCard } from "../Common/CelebrityCard";

const availableCeleb = data?.filter((celeb) => celeb.available === true);
const fanGramCeleb = data?.filter((celeb) => celeb.available !== true);

const BookCelebCards = () => {
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

  return (
    <div className="space-y-8 ">
      <div className="">
        <div className="flex w-full justify-evenly">
          <div className="flex-grow flex justify-start">
            <p className="text-white pb-4 text-2xl font-bold">
              Next Day Delivery
            </p>
            <Button className="bg-transparent text-[#9F1F5A] border rounded-2xl px-4 ml-4 border-[#9F1F5A]">
              See All
            </Button>
          </div>
          <div className="flex gap-6">
            {/* arrow left */}
            <button
              onClick={prevSlider}
              className="bg-transparent rounded-full w-6 h-6 md:w-8 md:h-8 border border-[#9F1F5A] flex justify-center items-center"
            >
              <MdOutlineKeyboardArrowLeft className="w-4 h-4 md:w-6 md:h-6  font-light text-[#9F1F5A]" />
            </button>
            {/* arrow right */}
            <button
              onClick={nextSlider}
              className="bg-transparent rounded-full w-6 h-6 md:w-8 md:h-8 border border-[#9F1F5A] flex justify-center items-center"
            >
              <MdOutlineKeyboardArrowRight className="w-4 h-4 md:w-6 md:h-6  font-light text-[#9F1F5A]" />
            </button>
          </div>
        </div>
        {/* <CelebritySlider
          currentSlider={currentSlider}
          data={availableCeleb}
        ></CelebritySlider> */}

        <div className="my-6 relative overflow-hidden">
          <div
            className="ease-linear duration-300 flex gap-[2%]"
            style={{ transform: `translateX(-${currentSlider * 52}%)` }}
          >
            {/* sliders */}
            {availableCeleb?.map((item) => (
              <div className="min-w-[20%] h-fit bg-black/30 relative duration-200">
                <CelebrityCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="flex w-full justify-evenly">
            <div className="flex-grow flex justify-start">
              <p className="text-white pb-4 text-2xl font-bold">
                FanGram Dhamaka
              </p>
              <Button className="bg-transparent text-[#9F1F5A] border rounded-2xl px-4 ml-4 border-[#9F1F5A]">
                See All
              </Button>
            </div>
            <div className="flex gap-6">
              {/* arrow left */}
              <button
                onClick={prevFanGramSlider}
                className="bg-transparent rounded-full w-6 h-6 md:w-8 md:h-8 border border-[#9F1F5A] flex justify-center items-center"
              >
                <MdOutlineKeyboardArrowLeft className="w-4 h-4 md:w-6 md:h-6  font-light text-[#9F1F5A]" />
              </button>
              {/* arrow right */}
              <button
                onClick={nextFanGramSlider}
                className="bg-transparent rounded-full w-6 h-6 md:w-8 md:h-8 border border-[#9F1F5A] flex justify-center items-center"
              >
                <MdOutlineKeyboardArrowRight className="w-4 h-4 md:w-6 md:h-6  font-light text-[#9F1F5A]" />
              </button>
            </div>
          </div>
        </div>

        <CelebritySlider
          currentSlider={currentFanGramSlider}
          data={fanGramCeleb}
        ></CelebritySlider>
      </div>
    </div>
  );
};

export default BookCelebCards;
