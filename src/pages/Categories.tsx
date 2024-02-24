import { Faq } from "@/components/Categories/FAQ";
import CelebrityCards from "@/components/Categories/CelebrityCards";
import FeaturedCelebrity from "@/components/Categories/FeaturedCelebrity";
import PromoteBusiness from "@/components/Categories/PromoteBusiness";
import Container from "@/components/Common/Container";

const Categories = () => {
  return (
    <Container>
      <FeaturedCelebrity />
      <CelebrityCards />
      <PromoteBusiness />
      <Faq />
    </Container>
  );
};

export default Categories;
