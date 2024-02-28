/* eslint-disable @typescript-eslint/no-explicit-any */
import FTable from "@/components/Common/FTable";
import TableData from "@/components/Dashboard/TableData";
import Spinner from "@/components/Spinner/Spinner";
import { useGetAllCelebrityQuery } from "@/redux/features/Celebrity/celebrityApi";

const AllCelebrities = () => {
  const { data: allCelebrities, isFetching } =
    useGetAllCelebrityQuery(undefined);

  if (isFetching) {
    return <Spinner />;
  }

  const TABLE_HEAD = [
    "Name",
    "Booking Price",
    "Meeting Price",
    "Verify",
    "Delete",
    "Edit",
  ];

  return (
    <div className="">
      <h2 className="mb-4 text-2xl font-semibold leading">Celebrities</h2>
      <div className="overflow-x-auto">
        <FTable TABLE_HEAD={TABLE_HEAD}>
          {allCelebrities?.data?.map((item: any, i: number) => {
            return <TableData key={i} item={item} />;
          })}
        </FTable>
      </div>
    </div>
  );
};

export default AllCelebrities;
