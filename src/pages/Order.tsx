import Container from "@/components/Common/Container";
import DetailsStepFooter from "@/components/Order/DetailsStepFooter";
import { useState } from "react";
import Confirm from "../components/Order/Confirm";
import Details from "../components/Order/Details";
import Payment from "../components/Order/Payment";
import "../styles/global.css";

const Order = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleNext = () => {
    setActiveStep((cur) => cur + 1);
    currentStep === stepData?.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  };

  const stepData = [
    { title: "Details", content: <Details /> },
    {
      title: "Confirm",
      content: <Confirm activeStep={activeStep} handleNext={handleNext} />,
    },
    {
      title: "Payment",
      // content: <Payment activeStep={activeStep} handleNext={handleNext} />,
      content: <Payment />,
    },
  ];

  return (
    <div>
      <div className="pt-[68px]">
        {/* <div className="w-full">
          <div className="lg:w-[840px] mx-auto">
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
        </div> */}

        {/* <div className="lg:w-[840px] mx-auto">
          {!complete && (
            <Button
              className=""
              onClick={() => {
                setActiveStep((activeStep) => activeStep + 1);
                currentStep === stepData.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
            >
              {currentStep === stepData.length ? "Finish" : "Next"}
            </Button>
          )}
        </div> */}

        <>
          <div className="lg:w-[840px] mx-auto flex justify-between">
            {stepData?.map((step, i) => (
              <div
                key={i}
                className={`step-item ${currentStep === i + 1 && "active"} ${
                  (i + 1 < currentStep || complete) && "complete"
                } `}
              >
                <div
                  className={`
                step
                ${activeStep === i ? "bg-primary " : "border-2 rounded-full"}`}
                >
                  {i + 1 < currentStep || complete ? "" : ""}
                </div>
                <p
                  className={`mt-2 ${
                    activeStep === i ? "text-primary" : "text-white"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          <div className="text-white">
            <div className="bg-[url('@/assets/stepperBg.png')] w-full h-2.5 bg-no-repeat bg-center bg-cover mt-12"></div>
            <div>
              <div className="">{stepData[activeStep]?.content}</div>
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
        </>
      </div>
    </div>
  );
};

export default Order;
