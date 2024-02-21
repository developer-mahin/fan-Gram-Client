import App from "@/App";
import Categories from "@/pages/Categories";
import Gifting from "@/pages/Gifting";
import Home from "@/pages/Home";
import HowToFanGram from "@/pages/HowToFanGram";
import Support from "@/pages/Support";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
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
    ],
  },
]);

export default router;
