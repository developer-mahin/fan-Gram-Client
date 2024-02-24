import { Button } from "../ui/button";

type TDetailsStepFooter = {
  handleNext: () => void;
  activeStep: number;
};

const DetailsStepFooter = ({ handleNext, activeStep }: TDetailsStepFooter) => {
  return (
    <div className="my-16 flex items-center justify-between">
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
  );
};

export default DetailsStepFooter;
