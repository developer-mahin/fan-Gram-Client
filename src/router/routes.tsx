import App from "@/App";
import BookCeleb from "@/pages/BookCeleb";
import Categories from "@/pages/Categories";
import Gifting from "@/pages/Gifting";
import HowToFanGram from "@/pages/HowToFanGram";
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
    ],
  },
]);

export default router;
