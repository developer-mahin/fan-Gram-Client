/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";

import apple from "@/assets/apple.png";
import facebook from "@/assets/facebook-fil.png";
import google from "@/assets/google.png";
import girl from "@/assets/sunny.png";
import { useRegisterUserMutation } from "@/redux/features/users/userApi";
import { TResponse } from "@/types/global.types";
import Autoplay from "embla-carousel-autoplay";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import welcome from "../../assets/welcomeIcon.png";
import FForm from "../Form/FForm";
import FInput from "../Form/FInput";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

type TSignUpModalProps = {
  setButtonText: any;
};

export function SignUpModal({ setButtonText }: TSignUpModalProps) {
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleSignUp: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    localStorage.setItem("email", data.email);

    try {
      const res = (await registerUser(userInfo)) as TResponse<any>;
      if (!res?.data.verified) {
        toast.success("Please verify your email, Check email", { id: toastId });
        return navigate("/email-verification");
      }

      if (res?.data.success) {
        toast.success(res?.data.success.message, { id: toastId });
      } else {
        toast.success(res?.error?.data.message, { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 bg-gradient-to-r from-[#E7746B] to-[#B72C99] rounded-[20px] lg:max-w-5xl">
        <div className="flex p-4 lg:flex-row flex-col items-center justify-center rounded-tl-xl rounded-bl-xl">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className=""
          >
            <CarouselContent className="rounded-xl">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex items-center justify-center">
                    <img
                      className="lg:w-[397px] w-[125px] lg:h-[513px] rounded-2xl object-cover"
                      src={girl}
                      alt=""
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="lg:p-12 p-6 rounded-tl-[40px] lg:rounded-bl-[40px] rounded-[20px] bg-white border border-white">
          <div>
            <div>
              <img src={welcome} className="w-[98px]" alt="" />
            </div>
            <div className="lg:text-[35px] text-2xl font-black text-[#0A0207]">
              Sign up with FanGram
            </div>

            <div>
              <div className="flex items-center lg:gap-[30px] gap-3 pt-5">
                <img
                  className="lg:size-[60px] size-12 cursor-pointer"
                  src={facebook}
                  alt=""
                />
                <img
                  className="lg:size-[60px] size-12 cursor-pointer"
                  src={google}
                  alt=""
                />
                <img
                  className="lg:size-[60px] size-12 cursor-pointer"
                  src={apple}
                  alt=""
                />
              </div>
              <div className="flex items-center mt-2 gap-3">
                <p className="w-fit">Or Continue With Email</p>
                <p className="flex-1 border-b border-gray-400"></p>
              </div>
            </div>
          </div>
          <FForm onSubmit={handleSignUp}>
            <div className="space-y-2">
              <div className="">
                <FInput
                  placeholder="Enter Your Name"
                  type="text"
                  required={true}
                  name="name"
                  className="bg-[#EEEEEE] h-11 "
                />
              </div>
              <div className="">
                <FInput
                  placeholder="Enter Your Email Here"
                  type="email"
                  required={true}
                  name="email"
                  className="bg-[#EEEEEE] h-11"
                />
              </div>
              <div>
                <FInput
                  placeholder="Enter Your Password"
                  type="password"
                  required={true}
                  name="password"
                  className="bg-[#EEEEEE] h-11"
                />
              </div>
              <div>
                <FInput
                  placeholder="Enter Your Invite Code (Optional)"
                  type="text"
                  name="inviteCode"
                  required={false}
                  className="bg-[#EEEEEE] h-11"
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-center mt-4 ">
              <div>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary rounded-full lg:w-[282px] px-12"
                >
                  SignUp
                </Button>
                <p className="font-bold text-sm text-center mt-4">
                  Already on FanGram?{" "}
                  <Button
                    onClick={() => setButtonText(0)}
                    className={
                      "bg-transparent hover:bg-transparent text-primary font-semibold"
                    }
                  >
                    Sign In
                  </Button>
                  {/* <LoginModal className="bg-transparent text-primary hover:bg-transparent" /> */}
                </p>
              </div>
            </DialogFooter>
          </FForm>
        </div>
      </div>
    </>
  );
}
