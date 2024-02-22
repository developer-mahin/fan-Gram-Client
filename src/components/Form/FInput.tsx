import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
};

const FInput = ({ type, name, placeholder }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: true,
      }}
      render={({ field }) => (
        <>
          <Input
            className="w-full"
            {...field}
            type={type}
            placeholder={placeholder ? placeholder : ""}
          />
        </>
      )}
    />
  );
};

export default FInput;
