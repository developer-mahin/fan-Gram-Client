import { useLocation } from "react-router-dom";
import banner from "../../../assets/Banner.png";
import Container from "../Container";
import Banner from "./Banner";

import Navbar from "./Navbar";

const Header = () => {
  const { pathname } = useLocation();
  let style;
  if (pathname === "/categories") {
    style = {
      backgroundImage: `url(${banner})`,
      height: "100vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
  }
  return (
    <div>
      <div style={style}>
        <div className="border-b border-gray-500">
          <Navbar />
        </div>
        {pathname === "/categories" && (
          <Container>
            <Banner />
          </Container>
        )}
      </div>
    </div>
  );
};

export default Header;
