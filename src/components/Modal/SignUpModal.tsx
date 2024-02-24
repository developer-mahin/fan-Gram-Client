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

// type TLogin = {
//   email: string;
//   password: string;
// };

export function SignUpModal() {
  const handleLogin = (data: any) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="text-primary">Sign up</span>
      </DialogTrigger>
      <DialogContent className="w-full p-12">
        <DialogHeader>
          <DialogTitle className="text-[35px] font-black text-[#0A0207]">
            Login With FamGram
          </DialogTitle>

          <DialogDescription>
            <div className="flex items-center gap-[30px] pt-5">
              <img
                className="size-[60px] cursor-pointer"
                src={facebook}
                alt=""
              />
              <img className="size-[60px] cursor-pointer" src={google} alt="" />
              <img className="size-[60px] cursor-pointer" src={apple} alt="" />
            </div>
            <div className="flex items-center mt-2 gap-3">
              <p className="w-fit">Or Continue With Email</p>
              <p className="flex-1 border-b border-gray-400"></p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <FForm onSubmit={handleLogin}>
          <div className="space-y-2">
            <div className="">
              <FInput
                placeholder="Enter Your Name"
                type="text"
                name="name"
                className="bg-[#EEEEEE] h-11"
              />
            </div>
            <div className="">
              <FInput
                placeholder="Enter Your Email Here"
                type="email"
                name="email"
                className="bg-[#EEEEEE] h-11"
              />
            </div>
            <div>
              <FInput
                placeholder="Enter Your Password"
                type="password"
                name="password"
                className="bg-[#EEEEEE] h-11"
              />
            </div>
            <div>
              <FInput
                placeholder="Enter Your Invite Code (Optional)"
                type="text"
                name="inviteCode"
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
      </DialogContent>
    </Dialog>
  );
}
