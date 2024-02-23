import Stepper from "@/components/Common/FStepper";
import Confirm from "../components/Order/Confirm";
import Details from "../components/Order/Details";
import Payment from "../components/Order/Payment";

const Order = () => {
  const stepData = [
    { title: "Details", content: <Details /> },
    { title: "Confirm", content: <Confirm /> },
    { title: "Payment", content: <Payment /> },
  ];

  return (
    <div>
      <div className="py-[68px]">
        <Stepper stepData={stepData}></Stepper>
      </div>
    </div>
  );
};

export default Order;
