/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUpdateCelebrityMutation } from "@/redux/features/Celebrity/celebrityApi";
import { TResponse } from "@/types/global.types";
import { toast } from "sonner";
import { Button } from "../ui/button";

const TableData = ({ item }: { item: any }) => {
  const [updateCelebrity] = useUpdateCelebrityMutation();

  const handleVerify = async (id: string, verified: boolean) => {
    const toastId = toast.loading("Loading");

    const verifyData = {
      id,
      verified: !verified,
    };

    try {
      const res = (await updateCelebrity(verifyData)) as TResponse<any>;

      if (res.error) {
        toast.error("something went wrong, not verified");
      } else {
        toast.success("successfully verified the celebrity");
      }
    } catch (error) {
      toast.error("Something went wrong");
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
      <td className="p-3">
        <Button className={`rounded-full px-4 h-8 hover:bg-red-500 bg-red-500`}>
          Delete
        </Button>
      </td>
      <td className="p-3">
        <Button
          className={`rounded-full px-4 h-8 hover:bg-green-500 bg-green-500`}
        >
          Edit
        </Button>
      </td>
    </tr>
  );
};

export default TableData;
