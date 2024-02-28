/* eslint-disable @typescript-eslint/no-explicit-any */
import FForm from "@/components/Form/FForm";
import FInput from "@/components/Form/FInput";
import { Button } from "@/components/ui/button";
import { useAddCelebrityMutation } from "@/redux/features/Celebrity/celebrityApi";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateCelebrity = () => {
  const [image, setImage] = useState<File | null>(null);
  const [addCelebrity] = useAddCelebrityMutation();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    const celebrityInfo = {
      celebrityName: data.celebrityName,
      bookingPrice: data.bookingPrice,
      meetingPrice: data.meetingPrice,
      offers: {
        discount: data.offers.discount,
        couponCode: data.offers.couponCode,
      },
      featured: true,
      responseIn: data.responseIn,
      videoUrl: data.videoUrl,
      verified: true,
      hashtag: data.hashtag,
      rating: data.rating,
    };
    const celebrityInfoString = JSON.stringify(celebrityInfo);

    const formData = new FormData();
    formData.append("images", image!);
    formData.append("data", celebrityInfoString);

    try {
      const res = await addCelebrity(formData).unwrap();
      if (res.success) {
        toast.success("Celebrity add successful", { id: toastId });
      } else {
        toast.success("Something went wrong please try again", { id: toastId });
      }
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="px-4">
      <FForm onSubmit={onSubmit}>
        <div className="grid grid-cols-3 gap-6">
          <FInput
            name="celebrityName"
            type="text"
            required={true}
            placeholder="Add Celebrity Name"
            label="Celebrity Name"
          />
          <FInput
            name="bookingPrice"
            type="number"
            required={true}
            placeholder="Add Celebrity Name"
            label="Celebrity Name"
          />
          <FInput
            name="meetingPrice"
            type="number"
            required={true}
            placeholder="Add Meeting Price "
            label="Meeting Price"
          />
          <FInput
            name="offers.discount"
            type="number"
            required={true}
            placeholder="Add discount "
            label="Discount"
          />
          <FInput
            name="offers.couponCode"
            type="text"
            required={true}
            placeholder="Add Coupon Code"
            label="Coupon Code"
          />
          <FInput
            name="responseIn"
            type="text"
            required={true}
            placeholder="Add Celebrity Response Time"
            label="Celebrity Response Time"
          />
          <FInput
            name="videoUrl"
            type="text"
            required={true}
            placeholder="Add Video Url"
            label="Celebrity Response Time"
          />
          <FInput
            name="hashtag"
            type="text"
            required={true}
            placeholder="Add hashtag"
            label="Hashtag"
          />
          <FInput
            name="rating"
            type="number"
            required={true}
            placeholder="Add rating"
            label="Celebrity Rating"
          />
          <input
            onChange={handleImageChange}
            name="image"
            type="file"
            accept="image/*"
            required={true}
          />
        </div>
        <Button type="submit" className="px-8 font-semibold rounded-full mt-6">
          Add Celebrity
        </Button>
      </FForm>
    </div>
  );
};

export default CreateCelebrity;
