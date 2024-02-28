/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import apple from "@/assets/apple.png";
import facebook from "@/assets/facebook-fil.png";
import google from "@/assets/google.png";
import { LoginModal } from "./LoginModal";
import FForm from "../Form/FForm";
import FInput from "../Form/FInput";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import girl from "@/assets/sunny.png";
import welcome from "../../assets/welcomeIcon.png";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRegisterUserMutation } from "@/redux/features/users/userApi";
import { toast } from "sonner";
import { TResponse } from "@/types/global.types";

export function SignUpModal() {
  const [registerUser] = useRegisterUserMutation();

  const handleSignUp: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading");

    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const res = (await registerUser(userInfo)) as TResponse<any>;
      if (res?.data.success) {
        toast.success(res?.data.success.message, { id: toastId });
      } else {
        toast.success(res?.error?.data.message, { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <span className="text-primary">Sign up</span>
        </DialogTrigger>
        <DialogContent className="max-w-5xl grid grid-cols-2 border-none bg-gradient-to-r from-[#E7746B] to-[#B72C99] rounded-[20px]">
          <div className="flex items-center justify-center rounded-tl-xl rounded-bl-xl">
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

          <div className="p-12 rounded-tl-[40px] rounded-bl-[40px] rounded-[20px] bg-white">
            <DialogHeader>
              <div>
                <img src={welcome} className="w-[98px]" alt="" />
              </div>
              <DialogTitle className="text-[35px] font-black text-[#0A0207]">
                Sign up with FanGram
              </DialogTitle>

              <DialogDescription className="w-full">
                <div className="flex items-center gap-[30px] pt-5">
                  <img
                    className="size-[60px] cursor-pointer"
                    src={facebook}
                    alt=""
                  />
                  <img
                    className="size-[60px] cursor-pointer"
                    src={google}
                    alt=""
                  />
                  <img
                    className="size-[60px] cursor-pointer"
                    src={apple}
                    alt=""
                  />
                </div>
                <div className="flex items-center my-2 gap-3">
                  <p className="w-fit">Or Continue With Email</p>
                  <p className="flex-1 border-b border-gray-400"></p>
                </div>
              </DialogDescription>
            </DialogHeader>
            <FForm onSubmit={handleSignUp}>
              <div className="space-y-2">
                <div className="">
                  <FInput
                    placeholder="Enter Your Name"
                    type="text"
                    required={true}
                    name="name"
                    className="bg-[#EEEEEE] h-11"
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
                    <LoginModal className="bg-transparent text-primary hover:bg-transparent" />
                  </p>
                </div>
              </DialogFooter>
            </FForm>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
