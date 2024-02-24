/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
  className?: any;
};

const FInput = ({ type, name, placeholder, className }: TInputProps) => {
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
            className={cn(className)}
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
