import { ReactNode, useState } from "react";
import { Button } from "../ui/button";
import Container from "./Container";

type TStepperProps = {
  stepData: {
    title: string;
    content: ReactNode;
  }[];
};

const Stepper = ({ stepData }: TStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((cur) => cur + 1);
  const handlePrev = () => setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4">
      <div className="w-[840px] mx-auto">
        <div className="flex justify-between items-center space-x-4">
          {stepData.map((_, index) => (
            <div className="flex flex-col items-center justify-center">
              <div
                key={index}
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
        <div className="mt-16 flex items-center justify-between">
          {/* <Button onClick={handlePrev} disabled={activeStep < 1}>
            Prev
          </Button> */}
          <p className="text-white font-semibold text-xl lg:w-[635px]">
            Secure and fast payments via Card, UPI, Netbanking and more By
            continuing, you agree to our terms
          </p>
          <div>
            <Button
              className="w-[414px] rounded-full font-semibold text-lg"
              onClick={handleNext}
              disabled={activeStep > 1}
            >
              Continue
            </Button>
            <p className="text-[#737373] font-medium text-sm">
              You will not be charged when you press this button
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Stepper;
