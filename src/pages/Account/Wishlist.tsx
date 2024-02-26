/* eslint-disable @typescript-eslint/no-unused-vars */
import sankar from "@/assets/sankar.png";
import Container from "@/components/Common/Container";
import { Button } from "@/components/ui/button";

const Wishlist = () => {
  return (
    <Container className="my-10">
      <div className="grid grid-cols-4 gap-8">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <div className="relative" key={index}>
              <img className="rounded-2xl" src={sankar} alt="" />
              <div className="absolute rounded-bl-2xl rounded-br-2xl bottom-0 bg-gradient-to-t from-[#A92DA9] to-transparent pt-28">
                <div className="p-4">
                  <h2 className="text-4xl font-bold text-white">
                    Shankar Mahadevan
                  </h2>
                  <div className="flex items-center justify-between">
                    <p
                      className="text-white text-xl"
                      style={{ fontFamily: "Satisfy, cursive" }}
                    >
                      #Make With Song
                    </p>
                    <Button className="bg-white font-semibold hover:bg-white text-primary rounded-full px-6">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Wishlist;
