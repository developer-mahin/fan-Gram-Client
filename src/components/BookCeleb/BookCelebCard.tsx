/* eslint-disable @typescript-eslint/no-explicit-any */
import colorMark from "@/assets/colorMark.png";
import question from "@/assets/question.png";
import safe from "@/assets/safe.png";
import star from "@/assets/star.png";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useGetSingleCelebrityQuery } from "@/redux/features/Celebrity/celebrityApi";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import Container from "../Common/Container";
import Spinner from "../Spinner/Spinner";
import { Button } from "../ui/button";

export function BookCelebCard() {
  const { id } = useParams();
  const {
    data: celebrity,
    isLoading,
  } = useGetSingleCelebrityQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  // const {
  //   imgUrl,
  //   celebrityName,
  //   videoUrl,
  //   bookingPrice,
  //   verified,
  //   meetingPrice,
  //   responseIn,
  //   hashtag,
  //   _id,
  // } = celebrity?.data;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
  };

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
        <CardContent className="flex lg:flex-row flex-col lg:items-center justify-start gap-4 mx-auto text-white px-0">
          <div>
            <img
              className="rounded-lg border border-gray-300 object-cover w-[258px] h-[262px]"
              src={`http://localhost:5000/uploads/${celebrity?.data?.imgUrl}`}
              alt=""
            />
          </div>

          <div className="flex-grow">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h2 className="lg:text-4xl text-lg font-extrabold text-white">
                  {celebrity?.data?.celebrityName}
                </h2>
                <div className="flex items-center gap-2">
                  {celebrity?.data?.verified && (
                    <img src={colorMark} className="lg:size-8 size-6 " alt="" />
                  )}
                  <div className="border rounded-full px-3 w-fit flex items-center gap-2 h-8">
                    <img src={star} className="size-5" alt="" />
                    <p className="text-sm font-medium">4.7 (12)</p>
                  </div>
                </div>
              </div>
              <p>
                Responds In <span className="text-primary">{celebrity?.data?.responseIn}</span>
              </p>
              <div className="flex lg:flex-row flex-col gap-3 items-center mt-3">
                {celebrity?.data?.hashtag?.map((tag: string, index: number) => (
                  <p
                    key={index}
                    className="rounded-full bg-[#292929] flex items-center justify-center h-10 px-4"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="flex lg:flex-row lg:items-start items-center flex-col gap-3 mt-3">
                <Link to={`/order/${celebrity?.data?._id}`}>
                  <Button className="px-6 rounded-3xl">
                    Book Video @ ₹{celebrity?.data?.bookingPrice}
                  </Button>
                </Link>
                <div className="flex gap-3  items-center">
                  <div className="flex gap-1 items-center border border-primary rounded-3xl pl-6">
                    <div className="lg:text-sm text-xs">Meet & Greet</div>
                    <div className="text-xs bg-primary rounded-bl-full rounded-tr-full rounded-br-full px-6 py-1">
                      Starts From <br /> ₹{celebrity?.data?.meetingPrice}
                    </div>
                  </div>
                  <div className="flex  lg:text-base text-xs items-center gap-1 border border-primary rounded-3xl lg:px-6 px-3 h-10">
                    For Business
                  </div>
                </div>
              </div>
              <div className="text-[#999999] flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1">
                  <p className="lg:text-base text-xs">
                    Secure & Safe Payments.
                  </p>
                  <img src={safe} alt="" className="size-4" />
                </div>
                <div className="flex items-center gap-1">
                  <p className="lg:text-base text-xs">Need Help? Text Us</p>
                  <img src={question} alt="" className="size-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[200px] relative overflow-hidden rounded-xl">
              <div className="slider-container">
                <Slider {...settings}>
                  {celebrity?.data?.videoUrl.length &&
                    celebrity?.data?.videoUrl?.map((video: any, inx: number) => {
                      return (
                        <React.Fragment key={inx}>
                          <video controls className="w-full">
                            <source
                              src={`http://localhost:5000/uploads/${video.path}`}
                            />
                          </video>
                        </React.Fragment>
                      );
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </CardContent>
      </Container>
    </Card>
  );
}
