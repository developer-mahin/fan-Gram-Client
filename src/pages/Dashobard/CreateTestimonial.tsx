/* eslint-disable @typescript-eslint/no-explicit-any */
import FForm from "@/components/Form/FForm";
import FInput from "@/components/Form/FInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useCreateTestimonialMutation } from "@/redux/features/Testimonial/testimonialApi";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateTestimonial = () => {
  const [videos, setVideos] = useState<File | null>(null);

  const [createTestimonial] = useCreateTestimonialMutation();

  const handleVideoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideos(file);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    const formData = new FormData();

    const workData = {
      review: data.review,
      name: data.name,
      occasion: data.occasion,
    };

    const newData = JSON.stringify(workData);

    if (videos) {
      formData.append(`videos`, videos);
    }
    formData.append("data", newData);

    try {
      const res = await createTestimonial(formData).unwrap();

      if (res.success) {
        toast.success("Successfully videos added", { id: toastId });
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
      <h2 className="mb-4 text-2xl font-semibold leading">Add Latest Work</h2>

      <div className="flex flex-col space-y-2 mt-2  lg:w-1/3">
        <div className="mb-3">
          <FInput
            name="review"
            type="text"
            label="Review"
            placeholder="Add review"
          />
          <FInput name="name" type="text" label="Name" placeholder="Add name" />
          <FInput
            name="occasion"
            type="text"
            label="Occasion"
            placeholder="Add occasion"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label className="font-semibold">Add Videos</Label>
          <input
            onChange={handleVideoChange}
            name="image"
            type="file"
            accept="video/*"
            className="border p-1.5 rounded-lg"
            required={true}
          />
        </div>
      </div>
      <Button type="submit" className="px-8 rounded-full mt-4">
        Submit
      </Button>
    </FForm>
  );
};

export default CreateTestimonial;
