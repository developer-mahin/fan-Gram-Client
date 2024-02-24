import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

type TFRadioButton = {
  setterState: Dispatch<SetStateAction<string>>;
  state: string;
  defaultValue: string;
  buttonValues: {
    value: string;
    label: string;
  }[];
};

const FRadioButton = ({
  setterState,
  state,
  defaultValue,
  buttonValues,
}: TFRadioButton) => {
  return (
    <RadioGroup className="flex items-center " defaultValue={defaultValue}>
      {buttonValues.map((data, i) => (
        <div
          key={i}
          className={` flex items-center h-10 px-6 rounded-full space-x-2 ${
            state === data.label ? "bg-primary text-white" : "bg-[#292929]"
          }`}
        >
          <RadioGroupItem
            onClick={() => setterState(data.label)}
            className={`${
              state === data.label
                ? "border-white text-white"
                : "border-white text-white"
            }`}
            value={data.value}
            id={data.value}
          />
          <Label htmlFor={data.value} className="cursor-pointer">
            {data.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default FRadioButton;
