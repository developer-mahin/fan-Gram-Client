import footer from "@/assets/Footer.png";
import Container from "./Container";
import logo from "@/assets/logo.png";
import { footerData } from "@/Data/footerData";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footer})`,
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="pt-20"
    >
      <Container>
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-7">
          <div className="md:max-w-md lg:col-span-2">
            <img src={logo} className="w-[100px]" alt="" />
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-5 md:grid-cols-5">
            <div>
              <p className="font-semibold tracking-wide text-white">About</p>
              <ul className="mt-[30px] space-y-2">
                {footerData[0].about?.map((item, i) => (
                  <li key={i}>
                    <a href="/" className="text-white ">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                Resources
              </p>
              <ul className="mt-[30px] space-y-2">
                {footerData[1]?.Resources?.map((item, i) => (
                  <li key={i}> 
                    <a href="/" className="text-white ">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">Help</p>
              <ul className="mt-[30px] space-y-2">
                {footerData[2]?.Help?.map((item, i) => (
                  <li key={i}>
                    <a href="/" className="text-white ">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">Explore</p>
              <ul className="mt-[30px] space-y-2">
                {footerData[3]?.Explore?.map((item, i) => (
                  <li key={i}>
                    <a href="/" className="text-white ">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                Follow Us
              </p>
              <div className="flex items-center justify-center gap-3 mt-[30px]">
                <img className="size-[40px] " src={facebook} alt="" />
                <img className="size-[40px] " src={instagram} alt="" />
                <img className="size-[40px] " src={youtube} alt="" />
                <img className="size-[40px] " src={twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
          <p className="text-sm text-white">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
