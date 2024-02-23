import SectionTitle from "../Common/SectionTitle";
import { Button } from "../ui/button";
import tick from "../../assets/tick.png";

const buttonText = [
  "Home Shot Recorded Video",
  "Brand Ambassador",
  "E-Invites/Corporate Shoutout",
  "Events/Gigs",
];

const services = [
  "Talent selection",
  "Production set-up",
  "Concept building",
  "Production management",
  "End-to-end service",
];

const WhatWeOffers = () => {
  return (
    <div className="pb-10">
      <SectionTitle className="text-center">What we offers</SectionTitle>
      <div className="flex items-center lg:gap-y-0 gap-y-3 lg:flex-row flex-col justify-between mt-8">
        {buttonText.map((data) => (
          <Button className="text-xl font-normal rounded-full bg-gradient-to-t from-[#39182B] lg:w-[327px] w-full to-[#020101] px-6 h-12 border-b-2 border-[#D383A4]">
            {data}
          </Button>
        ))}
      </div>
      <div className="lg:w-[1200px] mx-auto bg-[#202020] rounded-2xl px-8 py-6 mt-10 space-y-2">
        <p className="text-xl font-semibold text-white">Brand Ambassador</p>
        <p className="text-[#8E8E8E] text-sm font-medium">
          We help you onboard a celebrity face as a brand ambassador, which
          would level up your marketing and improve your positioning
        </p>
        <div>
          <p className="text-xl font-semibold text-white mb-2.5">Services</p>
          {services.map((data, i) => (
            <div key={i} className="flex items-center gap-2.5 space-y-1">
              <img src={tick} alt="" className="size-5" />
              <p className="text-white">{data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffers;
