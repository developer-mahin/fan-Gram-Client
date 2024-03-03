/* eslint-disable @typescript-eslint/no-explicit-any */
import FTable from "@/components/Common/FTable";
import DeleteModal from "@/components/Modal/DeleteModal";
import Spinner from "@/components/Spinner/Spinner";
import {
  useAllTestimonialQuery,
  useDeleteTestimonialMutation,
} from "@/redux/features/Testimonial/testimonialApi";
import React, { useState } from "react";
import { toast } from "sonner";

const AllTestimonial = () => {
  const [videoId, setVideoId] = useState("");
  const { data: testimonials, isLoading } = useAllTestimonialQuery(undefined);
  const [deleteTestimonial] = useDeleteTestimonialMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const TABLE_HEAD = ["Video", "Delete"];

  const handleDelete = async () => {
    const toastId = toast.loading("Loading....");
    try {
      const res = await deleteTestimonial(videoId).unwrap();
      console.log(res);
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
        {testimonials?.data?.map((item: any) => {
          return (
            <React.Fragment key={item._id}>
              <tr className="border-b border-gray-500">
                <td className="p-2">
                  <video controls className="size-32">
                    <source
                      src={`http://localhost:5000/uploads/${item.videoUrl}`}
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

export default AllTestimonial;
