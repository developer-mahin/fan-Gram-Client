/* eslint-disable @typescript-eslint/no-explicit-any */
import FForm from "@/components/Form/FForm";
import FInput from "@/components/Form/FInput";
import { Button } from "@/components/ui/button";
import { useCreateHomeFAQMutation } from "@/redux/features/HomeFAQ/HomeFAQApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const HomePageFAQ = () => {
  const [createHomeFAQ] = useCreateHomeFAQMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    try {
      const res = await createHomeFAQ(data).unwrap();
      if (res.success) {
        toast.success("FAQ Created", { id: toastId });
      } else {
        toast.success(res.data.message, {
          id: toastId,
        });
      }
    } catch (error: any) {
      toast.error(error.data.message, { id: toastId });
    }
  };

  return (
    <FForm onSubmit={onSubmit}>
      <div className="space-y-3 lg:w-1/3">
        <h2 className="text-3xl font-bold">Add Frequently Asked Questions</h2>
        <FInput
          type="text"
          placeholder="Question"
          name="question"
          label="Question"
        />
        <FInput type="text" placeholder="Answer" name="answer" label="Answer" />
        <div className="flex items-center gap-3">
          <Button className="rounded-full px-10" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </FForm>
  );
};

export default HomePageFAQ;
