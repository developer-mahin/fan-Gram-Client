/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../ui/button";
import { useGetAllCelebrityQuery } from "@/redux/features/Celebrity/celebrityApi";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../styles/global.css";
import SectionTitle from "../Common/SectionTitle";
import Spinner from "../Spinner/Spinner";
import { useAppDispatch } from "@/redux/hooks";
import { addToWishList } from "@/redux/features/Global/globalSlice";

const FeaturedCelebrity = () => {
  const { data: allCelebrity, isLoading } = useGetAllCelebrityQuery(undefined);

  const dispatch = useAppDispatch();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    centerPadding: "60px",
    rows: 2,
    slidesPerRow: 5,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          autoplay: true,
          dots: true,
          rows: 1,
          slidesToShow: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="lg:my-20 my-10 lg:pt-0 pt-10 relative">
        <div className="text-center mb-10">
          <SectionTitle className="text-center">Featured </SectionTitle>
          <p className="text-white mt-2">
            Get personalised video messages from your favourite celebrity!
            What's more? The price you see is the price you pay!
          </p>
        </div>

        <div className="slider-container ">
          <Slider {...settings} className="">
            {allCelebrity?.data?.map((item: any, i: number) => {
              const { imgUrl, celebrityName, hashtag, bookingPrice, _id } =
                item;
              return (
                <div key={i} className={`mt-5 `}>
                  <div
                    style={{
                      backgroundImage: `url(http://localhost:5000/uploads/${imgUrl})`,
                    }}
                    className={`relative celebrity `}
                  >
                    <div
                      className={
                        "flex justify-end pt-4 mr-2 pb-0 items-end text-white"
                      }
                    >
                      <button
                        onClick={() => dispatch(addToWishList(item))}
                        className="bg-[#FCAE4B] rounded-full flex items-center justify-center p-1.5"
                      >
                        <CiHeart className="text-xl" />
                      </button>
                    </div>

                    <div className="lg:pt-3 pt-32 py-4 pr-2 pl-[21px] absolute bottom-0 w-full rounded-tl-[30px] rounded-bl-[15px] rounded-br-[15px] celebrityCard">
                      <h2 className="text-2xl text-white font-bold pr-2">
                        {celebrityName}
                      </h2>
                      {hashtag?.map((tag: string, index: number) => (
                        <small
                          className="text-white"
                          key={index}
                          style={{ fontFamily: "'Satisfy', cursive" }}
                        >
                          #{tag}
                        </small>
                      ))}
                      <div className="flex items-center justify-between gap-2 mt-3">
                        <p className="text-sm font-bold text-white">
                          Starting From ₹{bookingPrice}
                        </p>
                        <Link to={`/book/${_id}`}>
                          <Button
                            size="sm"
                            className="bg-white text-primary hover:bg-white rounded-full font-medium"
                          >
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* <div className="lg:block w-[94%] mx-auto hidden">
          <Carousel className="w-full ">
            <CarouselContent className="bg-[#000000]">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="h-[960px]">
                  <div className="p-1">
                    <Card className="bg-[#000000] border-none">
                      <CardContent className=" p-0">
                        <div className="grid lg:grid-cols-5 grid-cols-1 gap-x-6 lg:gap-y-0 gap-y-6 lg:[&>*:nth-child(even)]:mt-[30px] lg:[&>*:nth-child(odd)]:pb-8">
                          {celebraty.map((item, i) => (
                            <div key={i}>
                              <div
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                  height: "446px",
                                  width: "100%",
                                  backgroundSize: "cover",
                                  backgroundRepeat: "no-repeat",
                                  borderRadius: "15px",
                                }}
                                className="relative"
                              >
                                <div className="bg-primary py-4 pr-2 pl-[21px] absolute bottom-0 w-full rounded-tl-[30px] rounded-bl-[15px] rounded-br-[15px]">
                                  <h2 className="text-2xl text-white font-bold pr-2">
                                    {item.name}
                                  </h2>
                                  <h2 className="text-white">{item.hashTag}</h2>
                                  <div className="flex items-center justify-between gap-2 mt-3">
                                    <p className="text-sm font-bold text-white">
                                      Starting From {item.price}
                                    </p>
                                    <Button
                                      size="sm"
                                      className="bg-white text-primary hover:bg-white rounded-full font-medium"
                                    >
                                      Book Now
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="lg:block hidden">
              <CarouselPrevious className="bg-primary hover:bg-primary hover:text-white border-primary text-white " />
              <CarouselNext className="bg-primary hover:bg-primary hover:text-white border-primary text-white " />
            </div>
          </Carousel>
        </div> */}

        {/* <div className="lg:hidden block">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className=""
          >
            <CarouselContent className="rounded-xl">
              {celebraty.map((item, index) => (
                <CarouselItem key={index}>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      height: "446px",
                      width: "100%",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "15px",
                    }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-t from-[#A92DA9] to-transparent  absolute bottom-0 w-full px-4 pb-4 pt-40 rounded-bl-[15px] rounded-br-[15px]">
                      <h2 className="text-2xl text-white font-bold pr-2">
                        {item.name}
                      </h2>
                      <h2 className="text-white">{item.hashTag}</h2>
                      <div className="flex items-center justify-between gap-2 mt-3">
                        <p className="text-sm font-bold text-white">
                          Starting From {item.price}
                        </p>
                        <Button
                          size="sm"
                          className="bg-white text-primary hover:bg-white rounded-full font-medium"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div> */}
      </div>
    </>
  );
};

export default FeaturedCelebrity;
