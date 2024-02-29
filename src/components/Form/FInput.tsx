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
  required?: boolean;
  accept?: string;
  multiple?: any;
};

const FInput = ({
  type,
  name,
  placeholder,
  className,
  label,
  required,
  accept,
  multiple,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required,
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
            multiple={multiple}
            accept={accept}
            placeholder={placeholder ? placeholder : ""}
          />
        </div>
      )}
    />
  );
};

export default FInput;
