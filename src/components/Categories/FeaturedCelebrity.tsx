import { celebraty } from "@/Data/celebratyData";
import { Button } from "../ui/button";

const FeaturedCelebrity = () => {
  return (
    <div className="py-20 relative">
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-x-6 lg:gap-y-0 gap-y-6 lg:[&>*:nth-child(even)]:mt-[30px] lg:[&>*:nth-child(odd)]:pb-8">
        {celebraty.map((item, i) => (
          <div key={i}>
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                height: "446px",
                width: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "15px",
              }}
              className="relative"
            >
              <div className="bg-primary py-4 pr-2 pl-[21px] absolute bottom-0 w-full rounded-tl-[30px] rounded-bl-[15px] rounded-br-[15px]">
                <h2 className="text-2xl text-white font-bold pr-2">
                  {item.name}
                </h2>
                <h2 className="text-white">{item.hashTag}</h2>
                <div className="flex items-center justify-between gap-2 mt-3">
                  <p className="text-sm font-bold text-white">
                    Starting From {item.price}
                  </p>
                  <Button
                    size="sm"
                    className="bg-white text-primary hover:bg-white rounded-full font-medium"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCelebrity;
