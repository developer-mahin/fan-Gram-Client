import logo from "../../assets/logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#3B2828] via-[#1B1B1B] via-40% to-[#3B2828] h-[300px] text-white py-8">
      <div className="w-[90%] mx-auto p-4 grid grid-flow-col gap-5">
        <div className="space-y-6 grid-cols-3">
          <img className="w-20" src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, quaerat sit! Delectus libero atque aspernatur
            repudiandae voluptatibus totam quam incidunt impedit, quasi voluptas
            sapiente illo asperiores aliquam suscipit sequi optio.
          </p>
        </div>
        <div className="space-y-6 grid-cols-2">
          <h3 className="text-xl font-semibold">About</h3>
          <div className="flex flex-col gap-4">
            <a className="text-sm" href="/story">
              Our Story
            </a>
            <a className="text-sm" href="/media">
              Media Coverage
            </a>
            <a className="text-sm" href="/blogs">
              Blogs
            </a>
          </div>
        </div>
        <div className="space-y-6 grid-cols-2">
          <h3 className="text-xl font-semibold">Resources</h3>
          <div className="flex flex-col gap-4">
            <a className="text-sm" href="/terms">
              Terms & Conditions
            </a>
            <a className="text-sm" href="/privacy">
              Privacy & Policy
            </a>
            <a className="text-sm" href="/investor">
              Investor Relationship
            </a>
          </div>
        </div>
        <div className="space-y-6 grid-cols-2">
          <h3 className="text-xl font-semibold">Help</h3>
          <div className="flex flex-col gap-4">
            <a className="text-sm" href="/faq">
              FAQ
            </a>
            <a className="text-sm" href="/contact">
              Contact Us
            </a>
            <a className="text-sm" href="/offer">
              Offers
            </a>
            <a className="text-sm" href="/case">
              Case Studies
            </a>
          </div>
        </div>
        <div className="space-y-6 grid-cols-2">
          <h3 className="text-xl font-semibold">Explore</h3>
          <div className="flex flex-col gap-4">
            <a className="text-sm" href="/all-celebrities">
              Browse All Celebrities
            </a>
            <a className="text-sm" href="/refund">
              Return & Refunds
            </a>
            <a className="text-sm" href="/tring">
              How To Tring?
            </a>
            <a className="text-sm" href="/career">
              Careers
            </a>
          </div>
        </div>
        <div className="space-y-6 grid-cols-3">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex gap-2">
            <TiSocialFacebook className="border rounded-sm text-xl" />
            <AiOutlineInstagram className="border rounded-sm text-xl" />
            <AiOutlineYoutube className="border rounded-sm text-xl" />
            <CiTwitter className="border rounded-sm text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
