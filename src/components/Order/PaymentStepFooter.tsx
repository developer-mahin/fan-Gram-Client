import { Button } from "../ui/button";

type TPaymentStepFooter = {
  handleNext: () => void;
  activeStep: number;
};

const PaymentStepFooter = ({ activeStep, handleNext }: TPaymentStepFooter) => {
  return (
    <div className="mt-16 flex items-center justify-between">
      <p className="text-black font-semibold lg:w-[444px]">
        Secure and fast payments via Card, UPI, Netbanking and more By
        continuing, you agree to our terms
      </p>
      <div>
        <Button className="w-[414px] rounded-full font-semibold text-lg" x>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PaymentStepFooter;
