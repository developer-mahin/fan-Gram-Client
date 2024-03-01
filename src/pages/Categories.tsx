import CelebrityCards from "@/components/Categories/CelebrityCards";
import FeaturedCelebrity from "@/components/Categories/FeaturedCelebrity";
import PromoteBusiness from "@/components/Categories/PromoteBusiness";
import { QuestionAccordion } from "@/components/Categories/QuestionAccordion";
import Testimonial from "@/components/Categories/Testimonial";
import Container from "@/components/Common/Container";

const Categories = () => {
  return (
    <Container>
      <FeaturedCelebrity />
      <CelebrityCards />
      <PromoteBusiness className="lg:p-[42px] p-[20px] rounded-2xl mt-20" />
      <Testimonial />
      <QuestionAccordion />
    </Container>
  );
};

export default Categories;
