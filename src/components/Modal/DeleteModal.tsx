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

type TDeleteModalProps = {
  className: string;
  handler: any;
  title: string;
};

const DeleteModal = ({ className, handler, title }: TDeleteModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("rounded-full", className)}>Delete</Button>
      </DialogTrigger>
      <DialogContent className="w-full p-12 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-[35px] font-black text-[#0A0207]">
            {title}
          </DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex justify-between mt-4 ">
          <DialogTrigger asChild>
            <Button
              onClick={() => handler()}
              className="bg-red-500 hover:bg-red-500"
            >
              Delete
            </Button>
          </DialogTrigger>
          <DialogTrigger asChild>
            <Button>Cancel</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
