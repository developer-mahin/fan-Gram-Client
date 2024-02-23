import { useLocation } from "react-router-dom";
import "../../../styles/global.css";
import Container from "../Container";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div
        className={`${
          pathname === "/categories" || pathname === "/" ? "banner_image" : ""
        }`}
      >
        <div className="border-b border-gray-500">
          <Navbar />
        </div>
        <div>
          {pathname === "/categories" ? (
            <Container>
              <Banner />
            </Container>
          ) : pathname === "/" ? (
            <Container>
              <Banner />
            </Container>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
