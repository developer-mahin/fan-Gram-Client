import { ReactNode, useState } from "react";
import Container from "../Common/Container";
import ConfirmStepFooter from "./ConfirmStepFooter";
import DetailsStepFooter from "./DetailsStepFooter";
import PaymentStepFooter from "./PaymentStepFooter";

type TStepperProps = {
  stepData: {
    title: string;
    content: ReactNode;
  }[];
};

const Stepper = ({ stepData }: TStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((cur) => cur + 1);
  // const handlePrev = () => setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4">
      <div className="w-[840px] mx-auto">
        <div className="flex justify-between items-center space-x-4">
          {stepData.map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div
                className={`size-6 rounded-full cursor-pointer ${
                  activeStep === index ? "bg-primary " : "border-2 rounded-full"
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

      <div className="mb-4 text-white">
        <div className="bg-[url('@/assets/stepperBg.png')] w-full h-2.5 bg-no-repeat bg-center bg-cover mt-12"></div>
        <div>
          <div className="py-12">{stepData[activeStep].content}</div>
        </div>
      </div>

      <Container>
        {activeStep === 0 ? (
          <DetailsStepFooter activeStep={activeStep} handleNext={handleNext} />
        ) : activeStep === 1 ? (
          <ConfirmStepFooter activeStep={activeStep} handleNext={handleNext} />
        ) : (
          // <PaymentStepFooter activeStep={activeStep} handleNext={handleNext} />
          <PaymentStepFooter />
        )}
      </Container>
    </div>
  );
};

export default Stepper;
