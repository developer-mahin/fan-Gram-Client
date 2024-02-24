import { Button } from "../ui/button";

type TConfirmStepFooter = {
  handleNext: () => void;
  activeStep: number;
};

const ConfirmStepFooter = ({ activeStep, handleNext }: TConfirmStepFooter) => {
  return (
    <div className=" flex items-center justify-between">
      <p className="text-black font-semibold text-sm lg:w-[444px]">
        Secure and fast payments via Card, UPI, Netbanking and more By
        continuing, you agree to our terms
      </p>
      <div>
        <Button
          className="w-[414px] rounded-full font-semibold text-lg"
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
