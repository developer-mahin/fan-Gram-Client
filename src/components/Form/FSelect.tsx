import { Controller, useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

type TOptions = {
  name: string;
};

type TInputProps = {
  label?: string;
  name: string;
  className?: string;
  options: TOptions[];
};

const FSelect = ({ label, name, className, options }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: true,
      }}
      render={({ field }) => (
        <div className="">
          <Label className="my-2.5">{label}</Label>
          <select
            {...field}
            className={cn(
              "w-full h-[48px] border rounded-lg px-2 bg-[#F7F7F7] my-2.5 text-[#B6B6B6]",
              className
            )}
          >
            <option>Choose</option>
            {options?.map((item) => (
              <option className="text-black" value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      )}
    />
  );
};

export default FSelect;
