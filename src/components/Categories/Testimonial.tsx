import { testimonialData } from "@/Data/testimonialData";
import { useEffect, useState } from "react";
import "../../styles/testimonial.css";
import { BsFillStarFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SectionTitle from "../Common/SectionTitle";
import FIconButton from "../Common/FIconButton";

const Testimonial = () => {
  const [people] = useState(testimonialData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="mt-20">
      <div className="flex items-center justify-between">
        <div>
          <SectionTitle className="">Loved by the People</SectionTitle>
          <p className="text-white mt-2">
            Lorem ipsum is placeholder text commonly Lorem ipsum is placeholder
            text commonly
          </p>
        </div>
        <div className="flex items-center gap-5">
          <FIconButton
            handler={() => setIndex(index - 1)}
            Icon={IoIosArrowBack}
          />
          <FIconButton
            handler={() => setIndex(index + 1)}
            Icon={IoIosArrowForward}
            className="bg-primary text-white"
            iconClass="text-white"
          />
        </div>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { name, img, occupation, review } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article
              className={`${position} lg:px-20 grid lg:grid-cols-2 gap-x-[68px] mx-auto bg-[#292929]`}
              key={indexPeople}
            >
              <img
                src={img}
                alt={name}
                className="lg:w-full h-[450px] object-cover"
              />
              <div className="bg-[url('@/assets/quate.png')] lg:mt-[120px] bg-no-repeat lg:w-[544px]">
                <div className="lg:px-10">
                  <p className="text-lg text-white mt-8">{review}</p>
                  <div className="flex items-center justify-center">
                    <div>
                      <div className="flex items-center gap-x-4 ">
                        <BsFillStarFill className="text-[#FFC107] text-xl" />
                        <BsFillStarFill className="text-[#FFC107] text-xl" />
                        <BsFillStarFill className="text-[#FFC107] text-xl" />
                        <BsFillStarFill className="text-[#FFC107] text-xl" />
                        <BsFillStarFill className="text-[#FFC107] text-xl" />
                      </div>
                      <p className="text-white font-bold">{name}</p>
                      <p className="text-white text-sm">{occupation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
