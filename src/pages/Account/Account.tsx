import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Booking from "./Booking";
import Profile from "./Profile";
import Wallet from "./Wallet";
import Wishlist from "./Wishlist";

const tabs = [
  {
    value: "profile",
    name: "Profile",
    component: <Profile />,
  },
  {
    value: "booking",
    name: "Booking",
    component: <Booking />,
  },
  {
    value: "wallet",
    name: "Wallet",
    component: <Wallet />,
  },
  {
    value: "wishlist",
    name: "Wishlist",
    component: <Wishlist />,
  },
];

const Account = () => {
  return (
    <div>
      <h2 className="text-center mt-12 text-white font-semibold text-[45px]">
        My Account
      </h2>
      <Tabs defaultValue="profile" className="my-10">
        <TabsList className="grid w-[400px] h-12 mx-auto rounded-full bg-[#292929] grid-cols-4 text-white">
          {tabs.map((data, i) => {
            return (
              <React.Fragment key={i}>
                <TabsTrigger
                  className="data-[state=active]:bg-primary h-12 py-0 data-[state=active]:text-white flex items-center justify-center rounded-full -mt-[3px]"
                  value={data.value}
                >
                  {data.name}
                </TabsTrigger>
              </React.Fragment>
            );
          })}
        </TabsList>

        {tabs.map((data, i) => {
          return (
            <React.Fragment key={i}>
              <TabsContent value={data.value} className="">
                {data.component}
              </TabsContent>
            </React.Fragment>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Account;
