/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAddBannerImageMutation } from "@/redux/features/Banner/bannerApi";
import { TResponse } from "@/types/global.types";
import { ChangeEvent, useState } from "react";
import { Field, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateBannerImage = () => {
  const [images, setImages] = useState<File[]>([]);
  const [addBannerImage] = useAddBannerImageMutation();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedImages: File[] = Array.from(event.target.files);
    setImages(selectedImages);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append(`images`, image);
    });

    try {
      const res = (await addBannerImage(formData)) as TResponse<any>;
      if (res?.data?.success) {
        setImages([]);
        toast.success("Successfully upload image");
      } else {
        toast.success("Something went wrong please try again");
      }
    } catch (error: any) {
      toast.success("Something went wrong please try again");
    }
  };

  return (
    <div className="">
      <form onSubmit={onSubmit} className="flex flex-col">
        <h2 className="mb-4 text-3xl font-bold">Add Banner Images</h2>
        <Label className="font-semibold mb-2">Banner Image</Label>
        <input
          name="images"
          accept="image/*"
          onChange={handleImageChange}
          type="file"
          multiple
          required
          className="lg:w-[350px] border px-2 py-1 rounded-lg"
        />
        <div>
          <Button className="mt-5 px-8 rounded-full">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateBannerImage;
