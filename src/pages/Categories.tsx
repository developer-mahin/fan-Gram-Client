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
      <PromoteBusiness />
      <QuestionAccordion />
    </Container>
  );
};

export default Categories;
