import { ReactNode, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Container from "../Common/Container";
import { faqData } from "@/Data/faqData";
import { Button } from "../ui/button";
import SectionTitle from "../Common/SectionTitle";

type TItemProps = {
  children: ReactNode;
  title: string;
  index: number;
};

const Item = ({ title, children, index }: TItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border rounded-lg shadow-sm bg-transparent ${
        isOpen ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <button
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center lg:gap-5 gap-3">
          <p
            className={`lg:size-8 size-6 flex items-center justify-center text-lg rounded-full font-semibold ${
              isOpen ? "bg-primary text-white" : "bg-white text-black"
            }`}
          >
            {index + 1}
          </p>
          <p className="lg:text-lg text-sm font-bold text-start">{title}</p>
        </div>
        <div className="flex items-center justify-center w-8 h-8 ">
          {isOpen ? (
            <IoIosArrowUp className="size-6 " />
          ) : (
            <IoIosArrowDown className="size-6 " />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 px-10 lg:pl-16 pl-[50px]">
          <p className="lg:text-base text-xs">{children}</p>
        </div>
      )}
    </div>
  );
};

export const QuestionAccordion = () => {
  return (
    <div className="py-20">
      <Container>
        <SectionTitle className="text-white text-center mb-8">
          Frequently Asked Questions
        </SectionTitle>
        <div className="lg:space-y-4 space-y-2">
          {faqData.map((data, i: number) => (
            <Item index={i} key={i} title={data.title}>
              {data.des}
            </Item>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <Button className="rounded-full px-8 text-lg">See All FAQ's</Button>
        </div>
      </Container>
    </div>
  );
};
