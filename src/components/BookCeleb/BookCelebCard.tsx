/* eslint-disable @typescript-eslint/no-explicit-any */
import colorMark from "@/assets/colorMark.png";
import question from "@/assets/question.png";
import safe from "@/assets/safe.png";
import star from "@/assets/star.png";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useGetSingleCelebrityQuery } from "@/redux/features/Celebrity/celebrityApi";
import React, { useCallback, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import Container from "../Common/Container";
import Spinner from "../Spinner/Spinner";
import { Button } from "../ui/button";

export function BookCelebCard() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const { id } = useParams();
  const { data: celebrity, isLoading } = useGetSingleCelebrityQuery(id);

  const {
    _id,
    imgUrl,
    celebrityName,
    videoUrl,
    bookingPrice,
    verified,
    meetingPrice,
    responseIn,
    hashtag,
  } = celebrity.data;

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === videoUrl.length - 1 ? 0 : currentSlider + 1
      ),
    [videoUrl.length]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Card className={cn("w-auto h-fit  bg-[#161616] border-none rounded-lg ")}>
      <Container>
        <CardHeader
          className={cn("flex  justify-end pb-0 items-end text-white")}
        >
          <button className="bg-[#FCAE4B] rounded-full flex items-center justify-center p-2 ">
            <CiHeart className="text-xl" />
          </button>
        </CardHeader>
        <CardContent className="flex items-center justify-start gap-4 mx-auto text-white px-0">
          <div>
            <img
              className="rounded-lg border border-gray-300 object-cover w-[258px] h-[262px]"
              src={`http://localhost:5000/uploads/${imgUrl}`}
              alt=""
            />
          </div>

          <div className="flex-grow">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h2 className="lg:text-4xl text-2xl font-extrabold text-white">
                  {celebrityName}
                </h2>
                <div className="flex items-center gap-2">
                  {verified && (
                    <img src={colorMark} className="size-8 " alt="" />
                  )}
                  <div className="border rounded-full px-3 w-fit flex items-center gap-2 h-8">
                    <img src={star} className="size-5" alt="" />
                    <p className="text-sm font-medium">4.7 (12)</p>
                  </div>
                </div>
              </div>
              <p>
                Responds In <span className="text-primary">{responseIn}</span>
              </p>
              <div className="flex gap-3 items-center mt-3">
                {hashtag?.map((tag: string, index: number) => (
                  <p
                    key={index}
                    className="rounded-full bg-[#292929] flex items-center justify-center h-10 px-4"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="flex gap-3 mt-3">
                <Link to={`/order/${_id}`}>
                  <Button className="px-6 rounded-3xl">
                    Book Video @ ₹{bookingPrice}
                  </Button>
                </Link>
                <div className="flex gap-1 items-center border border-primary rounded-3xl pl-6">
                  <div className="text-sm">Meet & Greet</div>
                  <div className="text-xs bg-primary rounded-bl-full rounded-tr-full rounded-br-full px-6 py-1">
                    Starts From <br /> ₹{meetingPrice}
                  </div>
                </div>
                <div className="flex items-center gap-1 border border-primary rounded-3xl px-6">
                  For Business
                </div>
              </div>
              <div className="text-[#999999] flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1">
                  <p>Secure & Safe Payments.</p>
                  <img src={safe} alt="" className="size-4" />
                </div>
                <div className="flex items-center gap-1">
                  <p>Need Help? Text Us</p>
                  <img src={question} alt="" className="size-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-[200px] relative overflow-hidden rounded-xl">
              {/* dots */}
              <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
                {videoUrl.map((_: any, inx: number) => (
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
                {videoUrl.length &&
                  videoUrl?.map((video: any, inx: number) => {
                    return (
                      <React.Fragment key={inx}>
                        <video controls>
                          <source
                            src={`http://localhost:5000/uploads/${video.path}`}
                          />
                        </video>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
          </div>
        </CardContent>
      </Container>
    </Card>
  );
}
