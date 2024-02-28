import { occasionButton } from "@/Data/detailsStepper";
import penIcon from "@/assets/penIcon.png";
import writeMessage from "@/assets/write_message.png";
import FormClickableButton from "@/components/Common/FormClickableButton";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

type TOccasionProps = {
  occasion: string;
  setOccasion: Dispatch<SetStateAction<string>>;
};

const buttonText = ["English", "हिंदी"];
const textAreaValue = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,132 characters remaining",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,132 characters remaining",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,132 characters remaining",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,132 characters remaining",
];

const Occasion = ({ occasion, setOccasion }: TOccasionProps) => {
  const [language, setLanguage] = useState("English");

  return (
    <div className="mt-12 p-8 bg-[#202020] rounded-xl">
      <div>
        <h2 className="text-3xl text-white font-bold">Order details</h2>
        <p className="text-xl font-semibold text-white py-2">
          Who is this video for?
        </p>
        <p className="text-white">Select an Occasion</p>
      </div>
      <div className="flex items-center flex-wrap gap-3 mt-5 ">
        {occasionButton.map((data, i) => (
          <FormClickableButton
            key={i}
            data={data}
            setterState={setOccasion}
            state={occasion}
          />
        ))}
      </div>

      <div className="mt-5">
        <h2 className="text-3xl font-semibold text-white mb-2">
          What do you want Sunny Leone to say in the video?
        </h2>
        <p className="text-sm text-primary">
          (Not applicable for Brand, Social Work and Corporate messages)
        </p>
        <p className="text-white">Select a Language</p>
        <div className="flex items-center flex-wrap gap-3 mt-5">
          {buttonText.map((data, i) => (
            <FormClickableButton
              key={i}
              data={data}
              setterState={setLanguage}
              state={language}
            />
          ))}
        </div>
        <div className="grid lg:grid-cols-4 gap-7 my-5">
          {textAreaValue.map((data, i) => (
            <div key={i}>
              <Textarea
                value={data}
                className="bg-[#292929] w-full h-[232px]"
              />
              <div className="flex items-center justify-between mt-3">
                <p className="text-sm text-[#999999]">
                  132 characters remaining
                </p>
                <Button className="bg-white h-7 hover:bg-white rounded-full text-black">
                  <span className="text-[10px] font-bold">Edit</span>
                  <img src={penIcon} alt="" className="size-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm font-medium text-primary">
          Note - Our celebrities wish to complete your order in their true self.
          Hence, the message / script may differ in some cases.
        </p>

        <div className="border border-[#888888] p-3 rounded-xl mt-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img className="size-[58px]" src={writeMessage} alt="" />
            <div className="flex flex-col gap-y-1">
              <h4 className="text-xl font-semibold text-white">
                Write longer message
              </h4>
              <p className="text-[#999999] font-medium">₹600</p>
            </div>
          </div>
          <div>
            <Button className="rounded-full p-0 size-8">
              <Plus />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-3">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="lg:text-sm text-xs font-medium leading-none peer-disabled:cursor-not-allowed text-[#999999] peer-disabled:opacity-70"
          >
            Don’t make this video public on Tring
          </label>
        </div>
      </div>
    </div>
  );
};

export default Occasion;
