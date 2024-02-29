/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteCelebrityMutation,
  useUpdateCelebrityMutation,
} from "@/redux/features/Celebrity/celebrityApi";
import { TResponse } from "@/types/global.types";
import { toast } from "sonner";
import { Button } from "../ui/button";
import DeleteModal from "../Modal/DeleteModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addCelebrityId } from "@/redux/features/Celebrity/celebritySlice";
import CelebrityUpdateModal from "../Modal/CelebrityUpdateModal";

const TableData = ({ item }: { item: any }) => {
  const [updateCelebrity] = useUpdateCelebrityMutation();
  const dispatch = useAppDispatch();
  const { celebrityId } = useAppSelector((state) => state.celebrity);
  const [deleteCelebrity] = useDeleteCelebrityMutation();

  const handleVerify = async (id: string, verified: boolean) => {
    const toastId = toast.loading("Loading");

    const verifyData = {
      id,
      verified: !verified,
    };

    try {
      const res = (await updateCelebrity(verifyData)) as TResponse<any>;

      if (res.error) {
        toast.error("something went wrong, not verified", { id: toastId });
      } else {
        toast.success("successfully verified the celebrity", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async () => {
    const toastId = toast.loading("Loading....");
    try {
      const res = await deleteCelebrity(celebrityId).unwrap();
      if (res.success) {
        toast.success("Successfully delete the celebrity", { id: toastId });
      } else {
        toast.success("Something went wrong please try again", { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <tr className="border-b border-gray-500">
      <td className="p-3">
        <p>{item.celebrityName}</p>
      </td>
      <td className="p-3">
        <p>₹{item.bookingPrice}</p>
      </td>
      <td className="p-3">
        <p>₹{item.meetingPrice}</p>
      </td>
      <td className="p-3">
        <Button
          onClick={() => handleVerify(item._id, item.verified)}
          className={`rounded-full px-2.5 h-8 ${
            item.verified
              ? "bg-green-500 text-black hover:bg-green-500 "
              : "bg-red-500 text-white hover:bg-red-500 "
          }`}
        >
          {item.verified ? "Verified User" : "Unverified User"}
        </Button>
      </td>
      <td className="p-3" onClick={() => dispatch(addCelebrityId(item._id))}>
        <DeleteModal
          title="Delete Celebrity"
          handler={handleDelete}
          className="rounded-full px-4 h-8 hover:bg-red-500 bg-red-500"
        />
      </td>
      <td className="p-3">
        <CelebrityUpdateModal className="rounded-full px-4 h-8 hover:bg-green-500 bg-green-500" />
      </td>
    </tr>
  );
};

export default TableData;
