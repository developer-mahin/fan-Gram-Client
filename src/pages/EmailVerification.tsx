/* eslint-disable @typescript-eslint/no-explicit-any */
import FForm from "@/components/Form/FForm";
import FInput from "@/components/Form/FInput";
import { Button } from "@/components/ui/button";
import { setIsModalOpen } from "@/redux/features/Global/globalSlice";
import { useVerifyEmailMutation } from "@/redux/features/users/userApi";
import { useAppDispatch } from "@/redux/hooks";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [verifyEmail] = useVerifyEmailMutation();
  const dispatch = useAppDispatch();
  const email = localStorage.getItem("email");

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    const userInfo = {
      email,
      code: Number(data.code),
    };

    try {
      const res = await verifyEmail(userInfo).unwrap();
      if (res.success) {
        navigate("/");
        dispatch(setIsModalOpen(true));
        localStorage.clear();
        toast.success("Email Verified Successful, Please Login");
      } else {
        toast.success("Something went wrong please try again");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <FForm onSubmit={handleLogin}>
        <div className="space-y-4 mt-3 border shadow-xl p-4 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-700">Verify You Email</h2>

          <div>
            <FInput
              placeholder="Enter Yor Verification Code"
              type="text"
              required={true}
              name="code"
              label="Verification Code"
              className="bg-[#EEEEEE] h-11 lg:w-[350px]"
            />
          </div>
          <Button className="px-8 rounded-full">Submit</Button>
        </div>
      </FForm>
    </div>
  );
};

export default EmailVerification;
