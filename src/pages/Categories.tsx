import CelebrityCards from "@/components/Categories/CelebrityCards";
import FeaturedCelebrity from "@/components/Categories/FeaturedCelebrity";
import PromoteBusiness from "@/components/Categories/PromoteBusiness";
import { QuestionAccordion } from "@/components/Categories/QuestionAccordion";
import Container from "@/components/Common/Container";

const Categories = () => {
  return (
    <Container>
      <FeaturedCelebrity />
      <CelebrityCards />
      <PromoteBusiness className="lg:w-[90%] mx-auto my-6 lg:py-8 justify-around rounded-xl" />
      <QuestionAccordion />
    </Container>
  );
};

export default Categories;
