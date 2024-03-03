/* eslint-disable @typescript-eslint/no-explicit-any */
import { data } from "@/Data/data";
import { useCallback, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CelebrityCard } from "../Common/CelebrityCard";
import { CelebritySlider } from "../Common/CelebritySlider";
import Container from "../Common/Container";
import FIconButton from "../Common/FIconButton";
import { Button } from "../ui/button";
import { useGetAllCelebrityQuery } from "@/redux/features/Celebrity/celebrityApi";
import Spinner from "../Spinner/Spinner";

const availableCeleb = data?.filter((celeb) => celeb.available === true);
const fanGramCeleb = data?.filter((celeb) => celeb.available !== true);

const BookCelebCards = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [currentFanGramSlider, setCurrentFanGramSlider] = useState(0);
  const { data: allCelebrity, isLoading } = useGetAllCelebrityQuery(undefined);
  console.log(allCelebrity);

  // const availableCeleb = data?.filter((celeb) => celeb?.earlyResponse === true);
  // const fanGramCeleb = data?.filter((celeb) => celeb?.earlyResponse !== true);

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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
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
              <FIconButton handler={prevSlider} Icon={IoIosArrowBack} />
              <FIconButton
                handler={nextSlider}
                Icon={IoIosArrowForward}
                className="bg-primary text-white"
                iconClass="text-white"
              />
            </div>
          </div>

          <div className="my-6 relative overflow-hidden">
            <div className="ease-linear duration-300 flex gap-[2%]">
              {/* sliders */}
              {allCelebrity?.data?.map((item: any) => (
                <div
                  key={item._id}
                  style={{ transform: `translateX(-${currentSlider * 50}%)` }}
                  className="min-w-[20%] h-fit bg-black/30 relative duration-200"
                >
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
                <FIconButton
                  handler={prevFanGramSlider}
                  Icon={IoIosArrowBack}
                />
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
            currentSlider={currentFanGramSlider}
            data={fanGramCeleb}
          ></CelebritySlider>
        </div>
      </div>
    </Container>
  );
};

export default BookCelebCards;
