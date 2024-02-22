import { CelebritySlider } from "../Common/CelebritySlider";
import { Button } from "../ui/button";
import img1 from "../../assets/image 13.png";
import sunny from "../../assets/image 12.png";
import mun from "../../assets/image 14.png";
import dilip from "../../assets/image 15.png";

export type TCeleb = {
  name: string;
  img: string;
  tags: Array<string>;
  price: number;
  available: boolean;
};

const data: TCeleb[] = [
  {
    name: "Shankar Mahadevan",
    img: img1,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: true,
  },
  {
    name: "Sunny Deol",
    img: sunny,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: true,
  },
  {
    name: "Shankar Mahadevan",
    img: img1,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: true,
  },
  {
    name: "Shankar Mahadevan",
    img: img1,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: true,
  },
  {
    name: "Sunny Deol",
    img: sunny,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: true,
  },
  {
    name: "Shankar Mahadevan",
    img: img1,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: true,
  },
  {
    name: "Sunny Deol",
    img: sunny,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: true,
  },
  {
    name: "Munmun Datta",
    img: mun,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: false,
  },
  {
    name: "Dilip Joshi",
    img: dilip,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: false,
  },
  {
    name: "Munmun Datta",
    img: mun,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: false,
  },
  {
    name: "Dilip Joshi",
    img: dilip,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: false,
  },
  {
    name: "Munmun Datta",
    img: mun,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: false,
  },
  {
    name: "Dilip Joshi",
    img: dilip,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: false,
  },
  {
    name: "Munmun Datta",
    img: mun,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: false,
  },
  {
    name: "Dilip Joshi",
    img: dilip,
    tags: ["Movie Star", "Baby Doll"],
    price: 9999,
    available: false,
  },
];

const availableCeleb = data?.filter((celeb) => celeb.available === true);
const fanGramCeleb = data?.filter((celeb) => celeb.available !== true);

const CelebrityCards = () => {
  return (
    <div className="space-y-8 ">
      <div>
        <div className="flex">
          <p className="text-white pl-[8%] pb-4 text-2xl font-bold">
            Next Day Delivery
          </p>
          <Button className="bg-transparent text-[#9F1F5A] border rounded-2xl px-4 ml-4 border-[#9F1F5A]">
            See All
          </Button>
        </div>
        <CelebritySlider data={availableCeleb}></CelebritySlider>
      </div>
      <div>
        <div className="flex">
          <p className="text-white pl-[8%] pb-4 text-2xl font-bold">
            FanGram Dhamaka
          </p>
          <Button className="bg-transparent text-[#9F1F5A] border rounded-2xl px-4 ml-4 border-[#9F1F5A]">
            See All
          </Button>
        </div>
        <CelebritySlider data={fanGramCeleb}></CelebritySlider>
      </div>
    </div>
  );
};

export default CelebrityCards;
