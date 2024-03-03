/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import colorMark from "@/assets/colorMark.png";
import colourInsta from "@/assets/colourInsta.png";
import greenTick from "@/assets/greenTick.png";
import guarantee from "@/assets/guarantee.png";
import help from "@/assets/help.png";
import save from "@/assets/save.png";
import secured from "@/assets/secured.png";
import star from "@/assets/star.png";
import { E164Number } from "libphonenumber-js/core";
import { Plus } from "lucide-react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "../../styles/global.css";
import Container from "../Common/Container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ConfirmStepFooter from "./ConfirmStepFooter";
import { useParams } from "react-router-dom";
import { useGetSingleCelebrityQuery } from "@/redux/features/Celebrity/celebrityApi";
import Spinner from "../Spinner/Spinner";

type TFakeData = {
  img: any;
  title: string;
  des: string;
};

export const fakeData: TFakeData[] = [
  {
    img: guarantee,
    title: "Money-back Guarantee!",
    des: "If for some reason, your request could not be completed, we’ll refund your money within 3-5 working days.",
  },
  {
    img: help,
    title: "Need help?",
    des: "Reach out to us on WhatsApp or Email for queries. Our support team shall get back to you within 2-3 working days.",
  },
  {
    img: secured,
    title: "Secured & safe payments",
    des: "Every transaction is 100% safe. Your payment details are encrypted during the transaction to safeguard your data.",
  },
];

type TConfirmProps = {
  activeStep: number;
  handleNext: () => void;
};

const Confirm = ({ activeStep, handleNext }: TConfirmProps) => {
  const [value, setValue] = useState<E164Number | undefined>("");
  const { id } = useParams();
  const { data: celebrityData, isLoading } = useGetSingleCelebrityQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  console.log(celebrityData);

  const { celebrityName, imgUrl } = celebrityData.data;
  return (
    <>
      <Container className="mt-12">
        <div>
          <h4 className="text-2xl font-semibold text-[#999999]">
            PERSONALIZED VIDEO FROM
          </h4>
          <div className="flex lg:flex-row flex-col items-center gap-4 mt-5">
            <img
              src={imgUrl}
              alt=""
              className="size-[100px] object-cover border rounded-xl"
            />
            <h2 className="text-4xl font-extrabold text-white">
              {celebrityName}
            </h2>
            <div className="flex items-center gap-2">
              <img src={colorMark} className="size-8" alt="" />
              <div className="border rounded-full px-3 w-fit flex items-center gap-2 h-8">
                <img src={star} className="size-5" alt="" />
                <p className="text-sm font-medium">4.7 (12)</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="mx-3">
        <div className="lg:w-[1022px]  mx-auto rounded-2xl bg-white ">
          <div className="lg:p-10 p-3">
            <h4 className="font-semibold text-secondary">
              YOUR BOOKING DETAILS
            </h4>
            <div className="flex items-center gap-4 mt-5">
              <img
                src={imgUrl}
                alt=""
                className="size-[100px] object-cover border rounded-xl"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-extrabold text-black">
                  {celebrityName}
                </h2>
                <p className="text-primary font-medium">Summary</p>
                <p className="text-secondary">
                  Hi, nayan what's up? Hope you are doing great in this festive
                  season of Diwali. It's me Sunny Leone wishing you a very happy
                  & prosperous Diwali from monika. May, the occasion of Diwali
                  light up new hopes and opportunities in your life and fulfill
                  all your dreams & desires. Have a good day bye-bye.
                </p>
              </div>
            </div>
            <div className="w-full h-1 my-8 rounded-full bg-[#E9E9E9]"></div>

            <div className="rounded-lg bg-[#F9F9F9] px-4 py-2.5 text-black flex items-center justify-between">
              <p className="font-semibold">Diwali</p>
              <p>
                <span className="font-bold"> ₹10450</span>{" "}
                <span className="line-through text-xs text-secondary">
                  ₹11000
                </span>
              </p>
            </div>

            <div className="rounded-lg bg-[#F9F9F9] mt-3 px-4 py-2.5 text-black flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img src={save} alt="" className="size-5" />
                <p className="font-semibold">
                  <span className="text-[#008115]">₹550 </span>
                  <span className="text-black">saved</span>
                </p>
              </div>
              <p className="font-bold text-[#008115]">Limited Offer</p>
            </div>
          </div>

          <div className="bg-[url('@/assets/line.png')] w-full h-1.5 bg-no-repeat bg-center bg-cover"></div>

          <Container className="my-5 lg:px-10 px-3">
            <h2 className="text-secondary font-semibold pb-3">
              You're eligible for a FREE gift!
            </h2>
            <div className="p-3 rounded-xl flex items-center justify-between bg-[#F9F9F9]">
              <div className="flex items-center gap-5">
                <div className="">
                  <img className="size-[30px]" src={colourInsta} alt="" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <h4 className=" font-semibold text-black">
                    DM On Instagram Get Unlocked
                  </h4>
                  <p className="text-sm flex items-center gap-1.5 font-semibold text-black">
                    <span> ₹0</span>
                    <span className="line-through font-normal text-secondary">
                      ₹1499
                    </span>
                    <span>₹1499</span>
                  </p>
                </div>
              </div>
              <div className="px-6 flex items-center gap-2">
                <p className="text-secondary text-sm">
                  Want to add this to your order?
                </p>
                <Button className="rounded-full p-0 size-8">
                  <Plus />
                </Button>
              </div>
            </div>
          </Container>

          <div className="bg-[url('@/assets/line.png')] w-full h-1.5 bg-no-repeat bg-center bg-cover"></div>

          <div className="bg-[url('@/assets/line.png')] w-full h-1.5 bg-no-repeat bg-center bg-cover"></div>

          <Container className="lg:px-10 px-3 py-5">
            <h2 className="text-secondary font-semibold pb-3">OFFERS</h2>
            <div className="p-3 rounded-xl flex items-center justify-between bg-[#F9F9F9]">
              <div className="flex items-center gap-5">
                <div className="">
                  <img
                    className="size-[32px] object-contain"
                    src={greenTick}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className=" font-semibold text-secondary">
                    "SMILE5" coupon applied
                  </h4>
                  <p className="text-sm text-black font-semibold">
                    Save another ₹550 on this order
                  </p>
                </div>
              </div>
              <div className="px-6 flex flex-col">
                <p className="text-primary font-bold text-sm">Remove</p>
                <p className="text-black font-bold underline text-sm">
                  View All Offers
                </p>
              </div>
            </div>
          </Container>

          <div className="bg-[url('@/assets/line.png')] w-full h-1.5 bg-no-repeat bg-center bg-cover"></div>

          <Container className="lg:px-10 px-3 py-5">
            <p className="text-secondary font-semibold">YOUR DETAILS</p>
            <div className="mb-4 space-y-1">
              <Label className="text-secondary font-medium">
                Billing number *
              </Label>

              <PhoneInput
                international
                defaultCountry="PK"
                value={value}
                onChange={setValue}
                className="border rounded-lg bg-[#F7F7F7] text-black px-4 bg-"
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div className=" space-y-1">
              <Label className="text-secondary font-medium">
                Billing email id *
              </Label>
              <Input
                className="w-full"
                type="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <p className="text-center text-secondary mt-2">
              *Your receipt & order updates will be sent here!
            </p>
          </Container>

          <div className="bg-[url('@/assets/line.png')] w-full h-1.5 bg-no-repeat bg-center bg-cover"></div>

          <Container className="lg:px-10 px-3 pt-5 text-black">
            <p className="text-secondary font-semibold">BILLING SUMMARY</p>
            <div className="flex items-center justify-between mt-5">
              <p className="font-medium">Personalized Video</p>
              <p className="font-medium">₹11000</p>
            </div>
            <div className="space-y-2 mt-2">
              <div className="flex items-center gap-3 justify-between ">
                <div className="flex items-center justify-between gap-3">
                  <img src={save} className="size-6" alt="" />
                  <p className="text-[#008115]">Add-ons</p>
                </div>
                <p>+₹2250</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between gap-3">
                  <img src={save} className="size-6" alt="" />
                  <p className="text-[#008115]">Coupon Discount</p>
                </div>
                <p> -₹550</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="w-full h-[3px] rounded-full bg-[#E9E9E9] my-2.5"></div>
              <div className="flex items-center justify-between ">
                <p>Prime Amount</p>
                <p>₹99</p>
              </div>
              <div className="w-full h-[3px] rounded-full bg-[#E9E9E9] my-2.5"></div>
              <div className="flex items-center justify-between">
                <p>Prime Discount</p>
                <p>-₹1650</p>
              </div>
              <div className="w-full h-[3px] rounded-full bg-[#E9E9E9] my-2.5"></div>

              <div className="flex items-center justify-between">
                <p className="font-bold text-black">Total</p>
                <p className="font-bold text-black"> ₹11149</p>
              </div>
            </div>
          </Container>

          <Container className="lg:px-10 px-3 py-10 text-black">
            <ConfirmStepFooter
              activeStep={activeStep}
              handleNext={handleNext}
            />
          </Container>
        </div>

        <div className="lg:w-[1022px]  mx-auto space-y-2.5 my-8">
          {fakeData.map((data, i) => (
            <div
              key={i}
              className="flex items-center gap-6 bg-[#1D1D1D] px-8 py-6 rounded-xl"
            >
              <img className="size-10" src={data.img} alt="" />
              <div className="space-y-1">
                <p>{data.title}</p>
                <p>{data.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Confirm;
