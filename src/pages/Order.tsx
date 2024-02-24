import Container from "@/components/Common/Container";
import DetailsStepFooter from "@/components/Order/DetailsStepFooter";
import { useState } from "react";
import Confirm from "../components/Order/Confirm";
import Details from "../components/Order/Details";
import Payment from "../components/Order/Payment";

const Order = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((cur) => cur + 1);
  // const handlePrev = () => setActiveStep((cur) => cur - 1);

  const stepData = [
    { title: "Details", content: <Details /> },
    {
      title: "Confirm",
      content: <Confirm activeStep={activeStep} handleNext={handleNext} />,
    },
    {
      title: "Payment",
      content: <Payment activeStep={activeStep} handleNext={handleNext} />,
    },
  ];

  return (
    <div>
      <div className="pt-[68px]">
        <div className="w-full">
          <div className="w-[840px] mx-auto">
            <div className="flex justify-between items-center space-x-4">
              {stepData.map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <div
                    className={`size-6 rounded-full cursor-pointer ${
                      activeStep === index
                        ? "bg-primary "
                        : "border-2 rounded-full"
                    }`}
                    onClick={() => setActiveStep(index)}
                  ></div>
                  <p
                    className={`mt-2 ${
                      activeStep === index ? "text-primary" : "text-white"
                    }`}
                  >
                    {_.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-white">
            <div className="bg-[url('@/assets/stepperBg.png')] w-full h-2.5 bg-no-repeat bg-center bg-cover mt-12"></div>
            <div>
              <div className="">{stepData[activeStep].content}</div>
            </div>
          </div>

          <Container>
            {activeStep === 0 ? (
              <DetailsStepFooter
                activeStep={activeStep}
                handleNext={handleNext}
              />
            ) : (
              ""
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Order;
