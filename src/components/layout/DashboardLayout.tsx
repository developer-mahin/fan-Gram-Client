import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { Menus } from "@/Data/dashboardMenu";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/logo.png";
import "../../styles/global.css";
import DashboardHeader from "../Common/Header/DashboardHeader";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex text-black bg-white w-full">
      {/* <div
        className={` ${
          open ? "lg:w-60" : "lg:w-[85px] w-16"
        }  relative duration-700  border-r shadow-2xl border-gray-100 `}
        onMouseEnter={() => setOpen(true)}
      >
        <div className={`scrollBar sticky top-0 left-0`}>
          <Link
            to="/"
            className={`flex items-center justify-center bg-gray-300  px-4 ${
              !open && "py-3"
            }`}
          >
            <img
              src={logo}
              className={`cursor-pointer lg:w-28 w-12 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
          </Link>

          <ul
            className={`lg:pt-6 pt-3 px-2 ${
              !open && "flex items-center justify-center"
            }`}
          >
            <div>
              {Menus.map((Menu, index) => (
                <li
                  key={index}
                  className={` rounded-md px-2 cursor-pointer hover:bg-light-white text-gray-300  
              `}
                >
                  <NavLink
                    className="font-semibold flex text-sm items-center gap-x-2"
                    to={Menu.path}
                  >
                    <TooltipProvider delayDuration={20}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            className={`bg-transparent text-gray-500 p-0 m-0 hover:bg-transparent `}
                          >
                            {Menu.icon}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="font-semibold bg-primary text-white border-none">
                          {Menu.title}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <span
                      className={`${
                        !open && "hidden"
                      } lg:font-medium text-gray-600 font-semibold lg:text-base text-xs origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </div>
          </ul>
        </div>

        <button
          className={` absolute cursor-pointer bg-transparent -right-7 top-9 w-7 
           rounded-full ${!open && "rotate-360 -right-6"}`}
          onClick={() => setOpen(!open)}
        >
          <LuArrowRightCircle className="size-6 " />
        </button>
      </div> */}
      <div
        className={`bg-white min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 border-r shadow-2xl border-gray-100 px-4`}
      >
        <div
          className={`py-3 flex ${open ? "justify-between" : "justify-end"}`}
        >
          <Link to="/">
            <img
              src={logo}
              className={`cursor-pointer lg:w-28 w-12 duration-500 ${
                !open && "hidden"
              }`}
            />
          </Link>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-2 relative">
          {Menus?.map((menu, i) => (
            <Link
              to={menu?.path}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-secondary hover:text-white rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.title}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 hover:text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-full flex-1 ">
        <div className="">
          <DashboardHeader />
        </div>
        <div className="py-10 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
