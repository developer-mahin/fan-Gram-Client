import colorMark from "@/assets/colorMark.png";
import star from "@/assets/star.png";
import sunny from "@/assets/sunny.png";
import { E164Number } from "libphonenumber-js/core";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PhoneInput from "react-phone-number-input";
import Container from "../Common/Container";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { fakeData } from "./Confirm";
import PaymentStepFooter from "./PaymentStepFooter";

// type TPaymentProps = {
//   activeStep: number;
//   handleNext: () => void;
// };

// { activeStep, handleNext }: TPaymentProps
const Payment = () => {
  const [value, setValue] = useState<E164Number | undefined>("");

  return (
    <>
      <Container className="mt-12">
        <div>
          <h4 className="text-2xl font-semibold text-[#999999]">
            PERSONALIZED VIDEO FROM
          </h4>
          <div className="flex items-center gap-4 mt-5">
            <img
              src={sunny}
              alt=""
              className="size-[100px] object-cover border rounded-xl"
            />
            <h2 className="text-4xl font-extrabold text-white">Sunny Leone</h2>
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

      <div className="bg-[#171717] mt-12 pt-[70px] pb-9">
        <div className="w-[1022px]  mx-auto rounded-2xl bg-white">
          <div className="p-10">
            <h4 className="font-semibold text-secondary">
              YOUR BOOKING DETAILS
            </h4>
            <div className="flex items-center gap-4 mt-5">
              <img
                src={sunny}
                alt=""
                className="size-[100px] object-cover border rounded-xl"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-extrabold text-black">
                  Sunny Leone
                </h2>
                <div className="flex items-center">
                  <span className="text-primary font-semibold"> Show/Edit</span>{" "}
                  <IoIosArrowDown className="size-6 text-primary" />
                </div>
                <p className="text-secondary"></p>
              </div>
            </div>
            <div className="flex items-center mt-4 justify-between text-black">
              <p>Video Message</p>
              <p>₹150</p>
            </div>
            <div className="flex items-center mt-4 justify-between text-black">
              <p>Service Fee</p>
              <p>₹7.50</p>
            </div>
            <div className="w-full h-[3px] rounded-full bg-[#E9E9E9] my-2.5"></div>

            <div className="relative">
              <Input type="text" placeholder="Coupon Code" className="h-11" />
              <Button className="rounded-full absolute right-2 top-1 h-9 px-6">
                Add
              </Button>
            </div>
            <div className="text-black flex items-center justify-between mt-5">
              <p className="font-bold text-2xl">Total</p>
              <p className="font-bold text-2xl">₹11149</p>
            </div>
          </div>
          <div className="bg-[url('@/assets/line.png')] w-full h-1.5 bg-no-repeat bg-center bg-cover"></div>

          <div className="p-10">
            <p className="font-semibold text-secondary mb-3">YOUR DETAILS</p>
            <p className="text-black">Billing Email </p>
            <p className="text-black">
              Email is required ro continue to payment
            </p>
            <p className="text-primary">Iamduteraboys@gmail.com</p>

            <PaymentStepFooter
            // activeStep={activeStep}
            // handleNext={handleNext}
            />
          </div>
        </div>

        <div className="w-[1022px]  mx-auto space-y-2.5 my-8">
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

export default Payment;
