import { Input } from "@/components/ui/input";

const DashboardHeader = () => {
  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 border-b border-gray-100 p-7 shadow-lg">
      <div>
        <Input className="w-full" placeholder="Search" />
      </div>
      <div></div>
    </div>
  );
};

export default DashboardHeader;
