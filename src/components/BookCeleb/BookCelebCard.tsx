/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CiHeart } from "react-icons/ci";
import { Button } from "../ui/button";
import { useCallback, useEffect, useState } from "react";

// type CardProps = React.ComponentProps<typeof Card>;

export function BookCelebCard({ data }: { data: Record<string, any> }) {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = [data.img, data.img, data.img];

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
      ),
    [sliderImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);
  return (
    <Card className={cn("w-auto h-fit  bg-[#161616] border-none rounded-lg")}>
      <CardHeader className={cn("flex  justify-end pb-0 items-end text-white")}>
        {" "}
        <button className="bg-[#FCAE4B] rounded-full flex items-center justify-center p-2 ">
          <CiHeart className="text-xl" />
        </button>
      </CardHeader>
      <CardContent className="flex items-center justify-start gap-4 mx-auto text-white">
        <div>
          <img className="rounded-lg w-full h-full" src={data.img} alt="" />
        </div>
        <div className="flex-grow">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold ">{data.name}</h1>
            <p>
              Responds In <span className="text-[#D42978]">5 Days</span>
            </p>
            <div className="flex gap-3">
              {data?.tags?.map((tag: string, index: number) => (
                <small
                  key={index}
                  className="font-serif rounded-2xl bg-[#292929] py-1 px-3"
                >
                  {tag}
                </small>
              ))}
            </div>
            <div className="flex gap-3">
              <Button className="px-6 rounded-3xl">
                Book Video @ ${data.price}
              </Button>
              <div className="flex gap-1 items-center border border-[#D42978] rounded-3xl pl-6">
                <div className="text-sm">Meet & Greet</div>
                <div className="text-xs bg-[#D42978] rounded-3xl px-6 py-1">
                  Starts From <br /> $399990
                </div>
              </div>
              <div className="flex items-center gap-1 border border-[#D42978] rounded-3xl px-6">
                For Business
              </div>
            </div>
            <small className="text-gray-400">
              Secure & Safe Payments. Need Help? Text Us
            </small>
          </div>
        </div>
        <div className="">
          <div className="w-[200px] relative overflow-hidden rounded-xl">
            {/* dots */}
            <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
              {sliderImages.map((_, inx) => (
                <button
                  key={inx}
                  onClick={() => setCurrentSlider(inx)}
                  className={`rounded-full duration-300 bg-white ${
                    currentSlider === inx ? "w-8" : "w-2"
                  } h-2`}
                ></button>
              ))}
            </div>
            {/* Carousel container */}
            <div
              className="ease-linear duration-300 flex transform-gpu"
              style={{ transform: `translateX(-${currentSlider * 100}%)` }}
            >
              {/* sliders */}
              {sliderImages.map((img, inx) => (
                <img
                  key={inx}
                  src={img}
                  className=" bg-black/20  object-cover object-center"
                  alt={`Slider - ${inx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
