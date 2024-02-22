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
import FForm from "./Form/FForm";
import FInput from "./Form/FInput";

// type TLogin = {
//   email: string;
//   password: string;
// };

export function LoginModal() {
  const handleLogin = (data: any) => {
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#D42978] hover:bg-[#D42978] rounded-full">
          Login/SignUp
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Login With FamGram</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <FForm onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <FInput
                placeholder="Enter Your Email Here"
                type="text"
                name="email"
              />
            </div>
            <div>
              <FInput
                placeholder="Enter Your Password"
                type="password"
                name="password"
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-center mt-4">
            <Button
              type="submit"
              className="bg-[#D42978] hover:bg-[#D42978] rounded-xl px-12"
            >
              Login
            </Button>
          </DialogFooter>
        </FForm>
      </DialogContent>
    </Dialog>
  );
}
