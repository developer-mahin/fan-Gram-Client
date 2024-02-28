import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Account from "@/pages/Account/Account";
import BookCeleb from "@/pages/BookCeleb";
import Categories from "@/pages/Categories";
import AllCelebrities from "@/pages/Dashobard/AllCelebrities";
import CreateCelebrity from "@/pages/Dashobard/CreateCelebrity";
import Dashboard from "@/pages/Dashobard/Dashboard";
import Gifting from "@/pages/Gifting";
import HowToFanGram from "@/pages/HowToFanGram";
import Order from "@/pages/Order";
import PromoteMyBusiness from "@/pages/PromoteMyBusiness";
import Support from "@/pages/Support";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Categories />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/gifting",
        element: <Gifting />,
      },
      {
        path: "/how-to-fangram",
        element: <HowToFanGram />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/book/:id",
        element: <BookCeleb />,
      },
      {
        path: "/promote-my-business",
        element: <PromoteMyBusiness />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/profile",
        element: <Account />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/create-celebrity",
        element: <CreateCelebrity />,
      },
      {
        path: "/dashboard/all-celebrities",
        element: <AllCelebrities />,
      },
    ],
  },
]);

export default router;
