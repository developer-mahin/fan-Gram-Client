/* eslint-disable @typescript-eslint/no-explicit-any */
import FTable from "@/components/Common/FTable";
import DeleteModal from "@/components/Modal/DeleteModal";
import Spinner from "@/components/Spinner/Spinner";
import {
  useAllLatestWorkQuery,
  useDeleteLatestWorkMutation,
} from "@/redux/features/latestWork/latestWorkApi";
import React, { useState } from "react";
import { toast } from "sonner";

const LatestWorks = () => {
  const [videoId, setVideoId] = useState("");
  const { data: latestWork, isLoading } = useAllLatestWorkQuery(undefined);
  const [deleteLatestWork] = useDeleteLatestWorkMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const TABLE_HEAD = ["Video", "Delete"];

  const handleDelete = async () => {
    const toastId = toast.loading("Loading....");
    try {
      const res = await deleteLatestWork(videoId).unwrap();
      if (res.success) {
        toast.success("Successfully delete the celebrity", { id: toastId });
      } else {
        toast.error("Something went wrong please try again", { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something went wrong please try again", { id: toastId });
    }
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold leading">All Latest Work</h2>

      <FTable TABLE_HEAD={TABLE_HEAD}>
        {latestWork.data.map((item: any) => {
          return (
            <React.Fragment key={item._id}>
              <tr className="border-b border-gray-500">
                <td className="p-2">
                  <video controls className="size-32">
                    <source
                      src={`http://localhost:5000/uploads/${item.path}`}
                    />
                  </video>
                </td>
                <td className="p-2" onClick={() => setVideoId(item._id)}>
                  <DeleteModal
                    className="px-8"
                    handler={handleDelete}
                    title="Delete Video"
                  />
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </FTable>
    </div>
  );
};

export default LatestWorks;
