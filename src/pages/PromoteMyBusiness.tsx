import PromoteBusiness from "@/components/Categories/PromoteBusiness";
import { QuestionAccordion } from "@/components/Categories/QuestionAccordion";
import Container from "@/components/Common/Container";
import BusinessWork from "@/components/PromoteMyBusiness/BusinessWork";
import CelebrityBrandShoutouts from "@/components/PromoteMyBusiness/CelebrityBrandShoutouts";
import LetsWork from "@/components/PromoteMyBusiness/LetsWork";
import OutLetestWork from "@/components/PromoteMyBusiness/OutLetestWork";
import WhatWeOffers from "@/components/PromoteMyBusiness/WhatWeOffers";
import Spinner from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import { useAllHomeFaqQuery } from "@/redux/features/HomeFAQ/HomeFAQApi";

const PromoteMyBusiness = () => {
  const { data: faqData, isLoading } = useAllHomeFaqQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <PromoteBusiness className="w-full py-[66px] justify-between lg:px-64 px-10" />
      <Container>
        <LetsWork />
        <OutLetestWork />
        <CelebrityBrandShoutouts />
        <WhatWeOffers />
        <BusinessWork />
        <QuestionAccordion faqData={faqData?.data} />

        <div className="bg-gradient-to-r from-[#EA8069] to-[#AB2DA7] px-10 py-12 rounded-2xl mb-10 flex flex-col items-center space-y-5">
          <h2 className="text-3xl font-extrabold text-white text-center">
            Ready to take your brand to greater heights?
          </h2>
          <Button className="text-primary bg-white px-10 text-xl font-medium hover:bg-white rounded-full h-12 w-fit">
            Get In Touch With Us
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PromoteMyBusiness;
