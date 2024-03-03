/* eslint-disable @typescript-eslint/no-explicit-any */
import AddCelebFaq from "@/components/Dashboard/AddCelebFaq";
import FForm from "@/components/Form/FForm";
import FInput from "@/components/Form/FInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAddCelebrityMutation } from "@/redux/features/Celebrity/celebrityApi";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

interface InputField {
  question: string;
  answer: string;
}

const CreateCelebrity = () => {
  const [image, setImage] = useState<File | null>(null);
  const [addCelebrity] = useAddCelebrityMutation();
  const [isDhamaka, setIsDhamaka] = useState("false");
  const [videos, setVideos] = useState<File[]>([]);
  const [faq, setFaq] = useState<InputField[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      console.log({ image });
    }
  };

  const handleVideoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setVideos(files);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    const celebrityInfo = {
      celebrityName: data?.celebrityName,
      bookingPrice: data?.bookingPrice,
      meetingPrice: data?.meetingPrice,
      offers: {
        discount: data?.offers?.discount,
        couponCode: data?.offers?.couponCode,
      },
      featured: true,
      faq: faq,
      responseIn: data?.responseIn,
      verified: true,
      hashtag: data?.hashtag,
      rating: data?.rating,
      earlyResponse: isDhamaka === "false" ? false : true,
    };
    const celebrityInfoString = JSON.stringify(celebrityInfo);

    const formData = new FormData();
    formData.append("images", image!);

    videos.forEach((video) => {
      formData.append(`videos`, video);
    });

    formData.append("data", celebrityInfoString);

    try {
      const res = await addCelebrity(formData).unwrap();
      if (res.success) {
        toast.success("Celebrity add successful", { id: toastId });
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
    <div className="lg:px-4">
      <h2 className="mb-4 text-2xl font-semibold leading">
        Create Celebrities
      </h2>
      <FForm onSubmit={onSubmit}>
        <div className="grid lg:grid-cols-3 gap-6">
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
            placeholder="Add Booking Price"
            label="Celebrity Name"
          />
          <FInput
            name="meetingPrice"
            type="number"
            required={false}
            placeholder="Add Meeting Price "
            label="Meeting Price"
          />
          <FInput
            name="offers.discount"
            type="number"
            required={false}
            placeholder="Add discount "
            label="Discount"
          />
          <FInput
            name="offers.couponCode"
            type="text"
            required={false}
            placeholder="Add Coupon Code"
            label="Coupon Code"
          />
          <FInput
            name="responseIn"
            type="text"
            required={false}
            placeholder="Add Celebrity Response Time"
            label="Celebrity Response Time"
          />
          <FInput
            name="videoUrl"
            type="text"
            required={false}
            placeholder="Add Video Url"
            label="Celebrity Response Time"
          />
          <FInput
            name="hashtag"
            type="text"
            required={false}
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
          <div className="flex flex-col space-y-2 mt-3">
            <Label>Add Image</Label>
            <RadioGroup
              onValueChange={(value: string) => setIsDhamaka(value)}
              defaultValue="false"
              className="flex items-center "
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="true" id="r2" />
                <Label htmlFor="r2">Next Day Delivery</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="false" id="r3" />
                <Label htmlFor="r3">FanGram Dhamaka</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Add Image</Label>
            <input
              onChange={handleImageChange}
              name="image"
              type="file"
              multiple
              accept="image/*"
              className="border p-1.5 rounded-lg"
              required={true}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Add Videos</Label>
            <input
              onChange={handleVideoChange}
              name="image"
              type="file"
              multiple
              accept="video/*"
              className="border p-1.5 rounded-lg"
              required={true}
            />
          </div>
        </div>
        <AddCelebFaq faq={faq} setFaq={setFaq} />
        <Button type="submit" className="px-8 font-semibold rounded-full mt-6">
          Add Celebrity
        </Button>
      </FForm>
    </div>
  );
};

export default CreateCelebrity;
