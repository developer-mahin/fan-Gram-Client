/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
  className?: any;
  label?: string;
};

const FInput = ({ type, name, placeholder, className, label }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: true,
      }}
      render={({ field }) => (
        <div className="flex flex-col gap-y-1">
          <Label htmlFor={name} className="mb-2">
            {label}
          </Label>
          <Input
            className={cn(className)}
            {...field}
            type={type}
            placeholder={placeholder ? placeholder : ""}
          />
        </div>
      )}
    />
  );
};

export default FInput;
