import CelebrityCards from "@/components/Categories/CelebrityCards";
import FeaturedCelebrity from "@/components/Categories/FeaturedCelebrity";
import PromoteBusiness from "@/components/Categories/PromoteBusiness";
import { QuestionAccordion } from "@/components/Categories/QuestionAccordion";
import Testimonial from "@/components/Categories/Testimonial";
import Container from "@/components/Common/Container";
import Spinner from "@/components/Spinner/Spinner";
import { useAllHomeFaqQuery } from "@/redux/features/HomeFAQ/HomeFAQApi";

const Categories = () => {
  const { data: faqData, isLoading } = useAllHomeFaqQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <FeaturedCelebrity />
      <CelebrityCards />
      <PromoteBusiness className="lg:p-[42px] p-[20px] rounded-2xl mt-20" />
      <Testimonial />
      <QuestionAccordion faqData={faqData?.data} />
    </Container>
  );
};

export default Categories;
