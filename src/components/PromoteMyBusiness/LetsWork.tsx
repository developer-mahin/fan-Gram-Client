import { letsWorkFormData } from "@/Data/letsWrokFormData";
import { FieldValues, SubmitHandler } from "react-hook-form";
import SectionTitle from "../Common/SectionTitle";
import FForm from "../Form/FForm";
import FInput from "../Form/FInput";
import FSelect from "../Form/FSelect";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

const selectProductOptions = [
  {
    name: "Product 1",
  },
  {
    name: "Product 2",
  },
  {
    name: "Product 3",
  },
];

const budgetButtonText = [
  "₹25L+",
  "₹5L - 25L",
  "₹1L - 5L",
  "₹25K - 1L",
  "Under ₹25K",
];

const LetsWork = () => {
  const [budget, setBudget] = useState("₹25L+");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white my-20 rounded-2xl px-[90px] py-[50px]">
      <SectionTitle className="text-center text-black">
        Let's get to work
      </SectionTitle>
      <FForm onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-x-10 gap-y-2.5 mt-5">
          {letsWorkFormData.map((data, i) => {
            return (
              <div key={i} className="space-y-2.5">
                <Label>{data.label}</Label>
                <FInput
                  name={data.name}
                  type={data.type}
                  placeholder={data.placeholder}
                  className="bg-[#F7F7F7] rounded-lg h-12 placeholder:text-[#B6B6B6]"
                />
              </div>
            );
          })}
          <div>
            <FSelect
              options={selectProductOptions}
              name="selectProduct"
              label="Select Product"
              className="mt-2"
            />
          </div>
        </div>

        <div>
          <FSelect
            options={selectProductOptions}
            name="HowDidYouFindUs"
            label="How Did You Find Us?"
            className="mt-2"
          />
        </div>
        <div className="flex flex-col">
          <Label>What’s your budget?</Label>
          <div className="space-x-5 mt-2.5">
            {budgetButtonText.map((data, i) => (
              <Button
                onClick={() => setBudget(data)}
                className={`w-fit rounded-full px-6  hover:text-white ${
                  budget === data ? "bg-primary " : "bg-[#F3F1F1] text-black"
                }`}
                key={i}
              >
                {data}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-3">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            By submitting, you agree to receive marketing communications about
            Tring for Business
          </label>
        </div>

        <div className="flex items-center  justify-center mt-6">
          <Button type="submit" className="lg:w-[294px] rounded-full">
            Submit
          </Button>
        </div>
      </FForm>
    </div>
  );
};

export default LetsWork;
