import { BookCelebCard } from "@/components/BookCeleb/BookCelebCard";
import BookCelebCards from "@/components/BookCeleb/BookCelebCards";
import { QuestionAccordion } from "@/components/Categories/QuestionAccordion";
import Spinner from "@/components/Spinner/Spinner";
import { useGetSingleCelebrityQuery } from "@/redux/features/Celebrity/celebrityApi";
import { useParams } from "react-router-dom";

const BookCeleb = () => {
  const { id } = useParams();
  const { data: celebrity, isLoading } = useGetSingleCelebrityQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="space-y-6">
      <BookCelebCard />
      <BookCelebCards />
      <div className="lg:w-[1200px] mx-auto">
        <QuestionAccordion faqData={celebrity?.data?.faq} />
      </div>
    </div>
  );
};

export default BookCeleb;
