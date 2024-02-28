import { Button } from "../ui/button";

type TConfirmStepFooter = {
  handleNext: () => void;
  activeStep: number;
};

const ConfirmStepFooter = ({ activeStep, handleNext }: TConfirmStepFooter) => {
  return (
    <div className=" flex lg:flex-row flex-col items-center justify-between">
      <p className="text-black font-semibold text-sm lg:w-[444px]">
        Secure and fast payments via Card, UPI, Netbanking and more By
        continuing, you agree to our terms
      </p>
      <div>
        <Button
          className="lg:w-[414px] w-[300px] lg:mt-0 mt-3 rounded-full font-semibold text-lg"
          onClick={handleNext}
          disabled={activeStep > 1}
        >
          Proceed To Pay
        </Button>
      </div>
    </div>
  );
};

export default ConfirmStepFooter;
