import { IoStatsChart } from "react-icons/io5";
import { RiBarChartBoxFill } from "react-icons/ri";

export const Menus = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <IoStatsChart className="size-6" />,
  },
  {
    title: "Create Celebrity",
    path: "/dashboard/create-celebrity",
    icon: <RiBarChartBoxFill className="size-6" />,
  },
  {
    title: "Celebrities Data",
    path: "/dashboard/all-celebrities",
    icon: <RiBarChartBoxFill className="size-6" />,
  },
];
