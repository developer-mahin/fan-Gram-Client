/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

// type CardProps = React.ComponentProps<typeof Card>;

export function CelebrityCard({ data }: { data: Record<string, any> }) {
  const navigate = useNavigate();

  return (
    <Card className={cn("w-auto h-fit  bg-[#292929] border-none rounded-2xl")}>
      <CardHeader
        className={cn("flex  justify-end pt-4 pb-0 items-end text-white")}
      >
        <button className="bg-[#FCAE4B] rounded-full flex items-center justify-center p-1.5">
          <CiHeart className="text-xl" />
        </button>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4 mx-auto">
        <img className="mx-auto rounded-full" src={data.img} alt="" />
        <CardTitle className="mx-auto text-white text-md">
          {data.name}
        </CardTitle>
        <CardDescription className="mx-auto text-white">
          {data?.tags?.map((tag: string, index: number) => (
            <small key={index} className="font-serif">
              #{tag}
            </small>
          ))}
        </CardDescription>
        <CardTitle className="mx-auto text-white text-md">
          <>Starting From $</>
          {data.price}
        </CardTitle>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => navigate(`/book/${data._id}`)}
          size="sm"
          className="mx-auto bg-white text-primary hover:bg-white rounded-full font-medium"
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
