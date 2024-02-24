import { data } from "@/FakeData/data";
import { BookCelebCard } from "@/components/BookCeleb/BookCelebCard";
import BookCelebCards from "@/components/BookCeleb/BookCelebCards";
import { useParams } from "react-router-dom";

const BookCeleb = () => {
  const { id } = useParams();
  const celebData = data?.filter((item) => item._id === Number(id));
  return (
    <div className="space-y-6">
      <BookCelebCard data={celebData[0]} />
      <BookCelebCards />
    </div>
  );
};

export default BookCeleb;
