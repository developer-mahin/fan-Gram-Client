/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

// type CardProps = React.ComponentProps<typeof Card>;

export function CelebrityCard({ data }: { data: Record<string, any> }) {
  const { imgUrl, celebrityName, hashtag, bookingPrice } = data;

  return (
    <Card
      className={cn(
        "w-full lg:h-[360px]  h-auto bg-[#292929] border-none rounded-2xl"
      )}
    >
      <CardHeader
        className={cn("flex justify-end pt-4 pb-0 items-end text-white")}
      >
        <button className="bg-[#FCAE4B] rounded-full flex items-center justify-center p-1.5">
          <CiHeart className="text-xl" />
        </button>
      </CardHeader>
      <CardContent className="flex pb-2.5 flex-col items-center justify-center space-y-1 mx-auto">
        <img
          className="rounded-full object-cover lg:size-32 size-[80px]"
          src={`http://localhost:5000/uploads/${imgUrl}`}
          alt=""
        />
        <CardTitle className="mx-auto text-white lg:text-2xl text-sm px-10 text-center">
          {celebrityName}
        </CardTitle>
        <CardDescription className="text-center text-white">
          {hashtag?.map((tag: string, index: number) => (
            <small key={index} style={{ fontFamily: "'Satisfy', cursive" }}>
              #{tag}
            </small>
          ))}
        </CardDescription>
        <CardTitle className="text-center text-white lg:text-lg text-xs">
          <>Starting From ₹</>
          {bookingPrice}
        </CardTitle>
      </CardContent>
      <CardFooter>
        <Link className="mx-auto" to={`/book/${data._id}`}>
          <Button
            size="sm"
            className=" bg-white text-primary hover:bg-white rounded-full font-medium"
          >
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
