import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProtectedRoutes from "@/components/layout/ProtectedRoutes";
import Account from "@/pages/Account/Account";
import BookCeleb from "@/pages/BookCeleb";
import Categories from "@/pages/Categories";
import AllBannerImages from "@/pages/Dashobard/AllBannerImages";
import AllCelebrities from "@/pages/Dashobard/AllCelebrities";
import AllTestimonial from "@/pages/Dashobard/AllTestimonial";
import CreateBannerImage from "@/pages/Dashobard/CreateBannerImage";
import CreateCelebrity from "@/pages/Dashobard/CreateCelebrity";
import CreateLatestWork from "@/pages/Dashobard/CreateLatestWork";
import CreateTestimonial from "@/pages/Dashobard/CreateTestimonial";
import FaqData from "@/pages/Dashobard/FaqData";
import HomePageFAQ from "@/pages/Dashobard/HomePageFAQ";
import LatestWorks from "@/pages/Dashobard/LatestWorks";
import EmailVerification from "@/pages/EmailVerification";
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
        path: "/order/:id",
        element: (
          <ProtectedRoutes role="user">
            <Order />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/profile",
        element: <Account />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes role="superAdmin">
        <DashboardLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,

        element: <CreateCelebrity />,
      },
      {
        path: "/dashboard/create-celebrity",
        element: <CreateCelebrity />,
      },
      {
        path: "/dashboard/all-celebrities",
        element: <AllCelebrities />,
      },
      {
        path: "/dashboard/add-banner-image",
        element: <CreateBannerImage />,
      },
      {
        path: "/dashboard/all-banner-images",
        element: <AllBannerImages />,
      },
      {
        path: "/dashboard/home-faq",
        element: <HomePageFAQ />,
      },
      {
        path: "/dashboard/create-latest-work",
        element: <CreateLatestWork />,
      },
      {
        path: "/dashboard/all-latest-work",
        element: <LatestWorks />,
      },
      {
        path: "/dashboard/faq-data",
        element: <FaqData />,
      },
      {
        path: "/dashboard/create-testimonial",
        element: <CreateTestimonial />,
      },
      {
        path: "/dashboard/testimonial-data",
        element: <AllTestimonial />,
      },
    ],
  },

  {
    path: "/email-verification",
    element: <EmailVerification />,
  },
]);

export default router;
