import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header/Header";

const MainLayout = () => {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
