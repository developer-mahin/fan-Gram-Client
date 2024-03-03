/* eslint-disable @typescript-eslint/no-explicit-any */
import apple from "@/assets/apple.png";
import facebook from "@/assets/facebook-fil.png";
import google from "@/assets/google.png";
import { Button } from "@/components/ui/button";
import { useLoginUserMutation } from "@/redux/features/users/userApi";
import { setUser } from "@/redux/features/users/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { decodedToken } from "@/utils/decodedToken";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import FForm from "../Form/FForm";
import FInput from "../Form/FInput";
import { setIsModalOpen } from "@/redux/features/Global/globalSlice";

type TLogin = {
  setIsLoginModalOpen?: any;
  className?: string;
  setButtonText: any;
};

export function LoginModal({ setButtonText }: TLogin) {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await loginUser(userInfo).unwrap();

      if (res.success) {
        const user = decodedToken(res.data.accessToken);
        dispatch(setUser({ user, token: res.data.accessToken }));
        dispatch(setIsModalOpen(false));
        toast.success(res.message, { id: toastId });
      } else {
        toast.success(res.error.message, { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something went wrong please try again", { id: toastId });
    }
  };

  return (
    <div>
      <div className="lg:w-[463px] w-[400px] lg:p-8 p-5 rounded-3xl">
        <div>
          <div className="lg:text-[35px] text-2xl font-black text-[#0A0207]">
            Login With FamGram
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
        <FForm onSubmit={handleLogin}>
          <div className="space-y-4 mt-3">
            <div className="">
              <FInput
                placeholder="Enter Your Email Here"
                required={true}
                type="text"
                name="email"
                className="bg-[#EEEEEE] h-11 w-full"
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
          </div>
          <div className="sm:justify-center mt-4 ">
            <div>
              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary rounded-full lg:w-[282px] px-12"
                >
                  Login
                </Button>
              </div>
              <div className=" flex items-center justify-center mt-4">
                <p className="font-bold text-sm text-center ">
                  Not on FanGram?
                </p>

                <div className="cursor-pointer">
                  <Button
                    onClick={() => setButtonText(1)}
                    className={
                      "bg-transparent hover:bg-transparent text-primary font-semibold"
                    }
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FForm>
      </div>
    </div>
  );
}
