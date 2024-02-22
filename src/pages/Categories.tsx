import { Faq } from "@/components/Categories/FAQ";
import FeaturedCelebrity from "@/components/Categories/FeaturedCelebrity";
import Container from "@/components/Common/Container";

const Categories = () => {
  return (
    <Container>
      <FeaturedCelebrity />
      <Faq />
    </Container>
  );
};

export default Categories;
