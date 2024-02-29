/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FInput from "../Form/FInput";
import FForm from "../Form/FForm";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useAddCelebrityMutation } from "@/redux/features/Celebrity/celebrityApi";

const CelebrityUpdateModal = ({ className }: { className: string }) => {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("rounded-full", className)}>Edit</Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl p-12 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-[35px] font-black text-[#0A0207]">
            Update Celebrity
          </DialogTitle>
        </DialogHeader>

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
          <DialogFooter className="flex justify-between mt-4 ">
            <DialogTrigger asChild>
              <Button className="bg-green-500 hover:bg-green-500 px-12 rounded-full ">
                Update
              </Button>
            </DialogTrigger>
            <DialogTrigger asChild>
              <Button type="button">Cancel</Button>
            </DialogTrigger>
          </DialogFooter>
        </FForm>
      </DialogContent>
    </Dialog>
  );
};

export default CelebrityUpdateModal;
