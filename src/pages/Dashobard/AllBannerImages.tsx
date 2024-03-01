/* eslint-disable @typescript-eslint/no-explicit-any */
import FTable from "@/components/Common/FTable";
import DeleteModal from "@/components/Modal/DeleteModal";
import Spinner from "@/components/Spinner/Spinner";
import {
  useDeleteBannerImageMutation,
  useGetAllBannerImageQuery,
} from "@/redux/features/Banner/bannerApi";
import { useState } from "react";
import { toast } from "sonner";

const AllBannerImages = () => {
  const [imageId, setImageId] = useState("");
  const TABLE_HEAD = ["Images", "Delete"];
  const [deleteBannerImage] = useDeleteBannerImageMutation();

  const { data: bannerImage, isLoading } = useGetAllBannerImageQuery(undefined);
  if (isLoading) {
    return <Spinner />;
  }

  const handleDelete = async () => {
    const toastId = toast.loading("Loading....");
    try {
      const res = await deleteBannerImage(imageId).unwrap();
      if (res.success) {
        toast.success("Successfully delete Image", { id: toastId });
      } else {
        toast.success("Something went wrong please try again", { id: toastId });
      }
    } catch (error: any) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <FTable TABLE_HEAD={TABLE_HEAD}>
      {bannerImage?.data?.map((item: any) => {
        return (
          <tr key={item._id} className="border-b border-gray-500">
            <td className="p-2">
              <img
                className="size-20 object-cover rounded-full"
                src={`http://localhost:5000/uploads/${item.path}`}
                alt=""
              />
            </td>
            <td onClick={() => setImageId(item._id)} className="p-2">
              <DeleteModal
                title="Delete Celebrity"
                handler={handleDelete}
                className="rounded-full px-4 h-8 hover:bg-red-500 bg-red-500"
              />
            </td>
          </tr>
        );
      })}
    </FTable>
  );
};

export default AllBannerImages;
