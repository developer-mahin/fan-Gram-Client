import tableImage from "@/assets/tableImage.png";

export type TData = {
  id: string;
  name: string;
  DateTime: string;
  earnedRedeem: string;
  status: string;
};

const data = [
  {
    id: "m5gr84i9",
    img: tableImage,
    name: "Sunny Leone",
    DateTime: "19 Oct, 2023,6:23PM",
    earnedRedeem: "-₹1,99.00",
    status: "Failed",
  },
  {
    id: "m5gr84i9",
    img: tableImage,
    name: "Sunny Leone",
    DateTime: "19 Oct, 2023,6:23PM",
    earnedRedeem: "-₹1,99.00",
    status: "Success",
  },
  {
    id: "m5gr84i9",
    img: tableImage,
    name: "Sunny Leone",
    DateTime: "19 Oct, 2023,6:23PM",
    earnedRedeem: "-₹1,99.00",
    status: "Failed",
  },
  {
    id: "m5gr84i9",
    img: tableImage,
    name: "Sunny Leone",
    DateTime: "19 Oct, 2023,6:23PM",
    earnedRedeem: "-₹1,99.00",
    status: "Success",
  },
  {
    id: "m5gr84i9",
    img: tableImage,
    name: "Sunny Leone",
    DateTime: "19 Oct, 2023,6:23PM",
    earnedRedeem: "-₹1,99.00",
    status: "Failed",
  },
  {
    id: "m5gr84i9",
    img: tableImage,
    name: "Sunny Leone",
    DateTime: "19 Oct, 2023,6:23PM",
    earnedRedeem: "-₹1,99.00",
    status: "Success",
  },
];

export type TWallet = {
  id: string;
  name: string;
  DateTime: string;
  earnedRedeem: string;
  status: "pending" | "processing" | "success" | "failed";
};

const columns = [
  {
    accessorKey: "name",
    header: "Activity",
  },
  {
    accessorKey: "DateTime",
    header: "Date & Time",
  },
  {
    accessorKey: "earnedRedeem",
    header: "Earned & Redeem",
  },
  {
    accessorKey: "status",
    header: "Payment Status",
  },
];

const Wallet = () => {
  return (
    <div className="my-10">
      <div className="lg:w-[900px] mx-auto bg-[#202020] p-6 rounded-2xl grid grid-cols-2 gap-5">
        <div className="space-y-2 border-r">
          <p className="text-white font-bold text-xl">
            <span className="text-primary">tcash</span> Earned
          </p>
          <p className="text-primary font-bold text-2xl">0</p>
        </div>
        <div className="space-y-2">
          <p className="text-white font-bold text-xl">Coupons</p>
          <p className="text-primary font-bold text-2xl">0</p>
        </div>
      </div>

      <div className="lg:w-[900px] mx-auto bg-[#202020] p-6 rounded-2xl mt-10">
        <p className="mb-2 text-white font-semibold text-xl">
          Recent transactions
        </p>
        <hr className="border-gray-700" />

        <table className="w-full">
          <thead className="text-secondary">
            <tr className="text-start">
              {columns.map((data) => {
                return <th className="p-3 text-start">{data.header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr className="text-white">
                  <td className="p-3 flex items-center gap-2">
                    <img className="size-6" src={item.img} alt="" />
                    <p className="font-medium">{item.name}</p>
                  </td>
                  <td className="p-3 font-medium">{item.DateTime}</td>
                  <td className="p-3 font-medium">{item.earnedRedeem}</td>
                  <td
                    className={`p-3 font-semibold ${
                      item.status === "Failed"
                        ? "text-[#FF5353]"
                        : "text-[#08C949]"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <FTable data={data} columns={columns} /> */}
      </div>
    </div>
  );
};

export default Wallet;
