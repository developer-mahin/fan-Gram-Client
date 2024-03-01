import FForm from "@/components/Form/FForm";
import FInput from "@/components/Form/FInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface InputField {
  value: string;
}

const HomePageFAQ = () => {
  const [inputFields, setInputFields] = useState<InputField[]>([{ value: "" }]);

  const handleAddField = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <FForm onSubmit={onSubmit}>
      <div className="space-y-3">
        <h2 className="text-3xl font-bold">All Frequently Asked Questions</h2>
        {inputFields.map((inputField, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <FInput
              label="Add Title"
              name="title"
              type="text"
              placeholder="Add Title"
              required={true}
              className="w-1/2 border rounded-lg h-10 px-3"
            />
            <FInput
              name="description"
              type="text"
              label="Add Description"
              placeholder="description"
              required={true}
              className="w-1/2 border rounded-lg h-10 px-3"
            />
          </div>
        ))}
        <div className="flex items-center gap-3">
          <Button
            className="rounded-full"
            type="button"
            onClick={handleAddField}
          >
            Add Field
          </Button>
          <Button className="rounded-full" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </FForm>
  );
};

export default HomePageFAQ;
