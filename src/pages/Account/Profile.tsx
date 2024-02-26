import FForm from "@/components/Form/FForm";
import FInput from "@/components/Form/FInput";
import FSelect from "@/components/Form/FSelect";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";
import { Button } from "@/components/ui/button";
import Container from "@/components/Common/Container";

const genderInputs = [{ name: "Male" }, { name: "Female" }, { name: "Others" }];
const buttonText = [
  "Celebrities",
  "Movies",
  "Tv Shows",
  "Web Series",
  "Sports Events",
  "Events",
  "Wishes",
  "Gifts",
  "Quotes ",
  "Invitations",
  "Captions",
  "Aarti",
];

const Profile = () => {
  const [value, setValue] = useState<E164Number | undefined>("");

  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="p-[56px] rounded-2xl bg-[#202020] mt-[50px] w-[925px] mx-auto">
        <div>
          <FForm onSubmit={onSubmit}>
            <div className="space-y-5">
              <FInput
                name="name"
                type="text"
                className="bg-transparent placeholder:text-[#8D8D8D] text-white h-12 border-gray-500"
                placeholder="John Doe"
                label="Name"
              />

              <FSelect
                className="bg-transparent placeholder:text-[#8D8D8D] text-white h-12 border-gray-500"
                name="gender"
                options={genderInputs}
                label="Gender"
              />
              <FInput
                name="date"
                type="date"
                className="bg-transparent placeholder:text-[#8D8D8D] text-white h-12 border-gray-500"
                placeholder="John Doe"
                label="Date Of Birth"
              />

              <div>
                <Label className="text-white mt-3">Your Mobile Number</Label>
                <PhoneInput
                  international
                  defaultCountry="PK"
                  value={value}
                  onChange={setValue}
                  className="border rounded-lg bg-[#F7F7F7] text-black px-4 mt-2 bg-"
                  placeholder="Enter Your Mobile Number"
                />
              </div>

              <FInput
                name="email"
                type="email"
                className="bg-transparent placeholder:text-[#8D8D8D] text-white h-12 border-gray-500"
                placeholder="Enter Your Email Id"
                label="Email"
              />

              <div className="flex items-center justify-center pt-10">
                <Button className="rounded-full w-[300px] text-lg">
                  Save Changes
                </Button>
              </div>
            </div>
          </FForm>
        </div>
      </div>

      <Container className="mt-12">
        <p className="text-2xl font-semibold text-white py-3">Discover More:</p>
        <div className="flex items-center gap-2.5">
          {buttonText.map((data, i) => {
            return (
              <Button className="rounded-full px-6" key={i}>
                {data}
              </Button>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Profile;
