import { buttonText } from "@/Data/detailsStepper";
import colorMark from "@/assets/colorMark.png";
import star from "@/assets/star.png";
import sunny from "@/assets/sunny.png";
import FormClickableButton from "@/components/Common/FormClickableButton";
import FForm from "@/components/Form/FForm";
import FInput from "@/components/Form/FInput";
import FRadioButton from "@/components/Form/FRadioButton";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Occasion from "./Occasion";
import extra1 from "@/assets/extra (2).png";
import extra2 from "@/assets/extra (1).png";
import extra3 from "@/assets/extra (3).png";
import extra4 from "@/assets/extra (4).png";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Container from "../Common/Container";

const buttonValues = [
  {
    value: "someoneElse",
    label: "Someone Else",
  },
  {
    value: "mySelf",
    label: "My Self",
  },
];

const deliveryFree = [
  {
    value: "within4DaysFree",
    label: "Within 4 days Free",
  },
];

const surpriseTo = [
  {
    value: "yes,GoHead₹1500",
    label: "Yes, go head ₹1500",
  },
  {
    value: "No, Skip for now",
    label: "No, Skip for now",
  },
];

const extra = [
  {
    img: extra1,
    title: "Remove the FanRang logo",
    des: "Download your video without a tring watermark",
    price: "₹750",
  },
  {
    img: extra2,
    title: "Gifting Experience",
    des: "Gift wrap your video with special effects.",
    price: "₹600",
  },
  {
    img: extra3,
    title: "Full HD",
    des: "Video is recorded with full HD 1080x1920. Pick this if the video quality is extra important.",
    price: "₹300",
  },
  {
    img: extra4,
    title: "Dm On Instagram",
    des: "Want To your Order",
    price: "₹600",
  },
  {
    img: extra1,
    title: "Remove the FanRang logo",
    des: "Download your video without a tring watermark",
    price: "₹750",
  },
];

const Details = () => {
  const [radioButton, setRadioButton] = useState("Someone Else");
  const [toButtonTextValue, setToButtonTextValue] = useState("He/Him");
  const [fromButtonTextValue, setFromButtonTextValue] = useState("He/Him");
  const [occasion, setOccasion] = useState("Birthday");
  const [deliveryWithFree, setDeliveryWithFree] =
    useState("Within 4 days Free");
  const [surpriseToDelivery, setSurpriseToDelivery] =
    useState("Yes, go head ₹1500");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container className="mt-12">
        <h4 className="lg:text-2xl text-xl font-semibold text-[#999999]">
          PERSONALIZED VIDEO FROM
        </h4>
        <div className="flex items-center gap-4 mt-5">
          <img
            src={sunny}
            alt=""
            className="size-[100px] object-cover border rounded-xl"
          />
          <div className="flex items-center gap-2">
            <h2 className="lg:text-4xl text-2xl font-extrabold text-white">
              Sunny Leone
            </h2>
            <div className="flex items-center gap-2">
              <img src={colorMark} className="size-8 " alt="" />
              <div className="border rounded-full px-3 w-fit flex items-center gap-2 h-8">
                <img src={star} className="size-5" alt="" />
                <p className="text-sm font-medium">4.7 (12)</p>
              </div>
            </div>
          </div>
        </div>

        <FForm onSubmit={onSubmit}>
          <div className="mt-12 p-8 bg-[#202020] rounded-xl">
            <h2 className="text-3xl text-white font-bold">Order details</h2>
            <p className="text-xl font-semibold text-white py-2">
              Who is this video for?
            </p>

            <div>
              <FRadioButton
                buttonValues={buttonValues}
                defaultValue="someoneElse"
                setterState={setRadioButton}
                state={radioButton}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-2.5 mt-5">
              <div className="flex flex-col gap-3">
                <Label htmlFor="toFirstName">To (First Name)</Label>
                <FInput
                  name="toFirstName"
                  type="text"
                  placeholder="Name Of the Receiver"
                  className="bg-[#292929] placeholder:text-[#BFBFBF] border-gray-600 h-12"
                />
                <div className="flex items-center space-x-3 ">
                  {buttonText.map((data, i) => (
                    <FormClickableButton
                      key={i}
                      data={data}
                      setterState={setToButtonTextValue}
                      state={toButtonTextValue}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="firstName">From (First Name)</Label>
                <FInput
                  name="fromFirstName"
                  type="text"
                  placeholder="John Doe"
                  className="bg-[#292929] placeholder:text-[#BFBFBF] border-gray-600 h-12"
                />
                <div className="flex items-center space-x-3 ">
                  {buttonText.map((data, i) => (
                    <FormClickableButton
                      key={i}
                      data={data}
                      setterState={setFromButtonTextValue}
                      state={fromButtonTextValue}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Occasion setOccasion={setOccasion} occasion={occasion} />

          <div className="mt-12 p-8 bg-[#202020] rounded-xl">
            <h2 className="text-3xl text-white font-bold">Delivery</h2>
            <p className="text-xl font-medium text-white py-2">
              How quickly do you want the video?
            </p>

            <div>
              <FRadioButton
                buttonValues={deliveryFree}
                defaultValue="within4DaysFree"
                setterState={setDeliveryWithFree}
                state={deliveryWithFree}
              />
            </div>
            <div className="mt-3">
              <p className="text-xl font-medium text-white py-2">
                Do you want to deliver this surprise to the recipient?
              </p>
              <FRadioButton
                buttonValues={surpriseTo}
                defaultValue="yes,GoHead₹1500"
                setterState={setSurpriseToDelivery}
                state={surpriseToDelivery}
              />
            </div>
          </div>

          <div className="pt-10 pb-5">
            <h2 className="text-3xl text-white font-bold">Extras</h2>
            <div>
              {extra.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-gradient-to-r from-black to-[#202020] mt-5 flex items-center justify-between"
                  >
                    <div className="flex lg:flex-row flex-col lg:items-center items-start lg:gap-5">
                      <div className="bg-primary p-2 rounded-lg">
                        <img className="size-[58px]" src={data.img} alt="" />
                      </div>
                      <div className="flex lg:mt-0 mt-4 flex-col gap-y-1">
                        <h4 className="text-xl font-semibold text-white">
                          {data.title}
                        </h4>
                        <p className="text-sm font-medium text-[#737373]">
                          {data.des}
                        </p>
                        <p className="text-[#737373] font-medium">
                          {data.price}
                        </p>
                      </div>
                    </div>
                    <div className="px-6 lg:mt-0 mt-4 ">
                      <Button className="rounded-full p-0 size-8">
                        <Plus />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FForm>
      </Container>
      <div className="bg-[url('@/assets/stepperBg.png')] w-full h-2.5 bg-no-repeat bg-center bg-cover mt-12"></div>
    </>
  );
};

export default Details;
