/* eslint-disable @typescript-eslint/no-explicit-any */
import { TCeleb } from "../Categories/CelebrityCards";
import { CelebrityCard } from "./CelebrityCard";

type TSlider = {
  currentSlider: any;
  data: TCeleb[];
};

export const CelebritySlider = ({ currentSlider, data }: TSlider) => {
  return (
    <div className="my-6 relative overflow-hidden">
      <div
        className="ease-linear duration-300 flex gap-[2%]"
        style={{ transform: `translateX(-${currentSlider * 52}%)` }}
      >
        {/* sliders */}
        {data?.map((item) => (
          <div className="min-w-[20%] h-fit bg-black/30 relative duration-200">
            <CelebrityCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelebritySlider;

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { CelebrityCard } from "./CelebrityCard";
// import { TCeleb } from "../Categories/CelebrityCards";

// export function CelebritySlider({ data }: { data: TCeleb[] }) {
//   return (
//     <>
//       <Carousel
//         opts={{
//           align: "center",
//         }}
//         className="w-[90%] mx-auto "
//       >
//         <div className="flex">
//           <CarouselPrevious />
//           <CarouselNext />
//         </div>
//         <CarouselContent>
//           {data?.map((item, index) => (
//             <CarouselItem
//               key={index}
//               className="basis-1/2 md:basis-1/3 lg:basis-1/4"
//             >
//               <div className="p-1">
//                 <CelebrityCard data={item} />
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </>
//   );
// }
