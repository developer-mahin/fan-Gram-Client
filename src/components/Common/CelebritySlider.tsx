import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CelebrityCard } from "./CelebrityCard";
import { TCeleb } from "../Categories/CelebrityCards";

export function CelebritySlider({ data }: { data: TCeleb[] }) {
  return (
    <>
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-[90%] mx-auto "
      >
        <div className="flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent>
          {data?.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <CelebrityCard data={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
