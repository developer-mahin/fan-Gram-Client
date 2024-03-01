/* eslint-disable @typescript-eslint/no-explicit-any */
import FTable from "@/components/Common/FTable";
import DeleteModal from "@/components/Modal/DeleteModal";
import Spinner from "@/components/Spinner/Spinner";
import {
  useAllHomeFaqQuery,
  useDeleteFaqMutation,
} from "@/redux/features/HomeFAQ/HomeFAQApi";
import { useState } from "react";
import { toast } from "sonner";

const FaqData = () => {
  const [faqId, setFaqId] = useState("");
  const { data: faqData, isLoading } = useAllHomeFaqQuery(undefined);
  const [deleteFaq] = useDeleteFaqMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const TABLE_HEAD = ["Question", "Answer", "Delete"];

  const handleDelete = async () => {
    const toastId = toast.loading("Loading...");

    try {
      const res = await deleteFaq(faqId).unwrap();
      if (res.success) {
        toast.success("FAQ  Deleted", { id: toastId });
      } else {
        toast.success(res.data.message, {
          id: toastId,
        });
      }
    } catch (error: any) {
      toast.error(error.data.message, { id: toastId });
    }
  };

  return (
    <FTable TABLE_HEAD={TABLE_HEAD}>
      {faqData.data.map((item: any) => {
        return (
          <tr key={item._id}>
            <td className="p-2">{item.question}</td>
            <td className="p-2">{item.answer}</td>
            <td onClick={() => setFaqId(item._id)} className="p-2">
              <DeleteModal handler={handleDelete} title="Delete FAQ" />
            </td>
          </tr>
        );
      })}
    </FTable>
  );
};

export default FaqData;
