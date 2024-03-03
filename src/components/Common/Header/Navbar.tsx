import { navList } from "@/Data/navlinkPaths";
import { LoginModal } from "@/components/Modal/LoginModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CgCloseO, CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import Container from "../Container";
import FNavLink from "../FNavLink";
import FModal from "../FModal";
import { SignUpModal } from "@/components/Modal/SignUpModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buttonText, setButtonText] = useState(0);

  return (
    <Container>
      <div className="py-2">
        <div className="relative flex items-center justify-between">
          <Link to="/">
            <img className="w-[100px]" src={logo} alt="" />
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {navList.map((item, i: number) => (
              <FNavLink item={item} key={i} />
            ))}
          </ul>
          <ul className="flex items-center hidden space-x-4 lg:flex">
            <li>
              <Link to="/promote-my-business">
                <Button className="bg-transparent hover:bg-transparent border rounded-full">
                  Promote My Business
                </Button>
              </Link>
            </li>
            <li>
              <FModal>
                {buttonText === 0 ? (
                  <LoginModal setButtonText={setButtonText} />
                ) : (
                  <SignUpModal setButtonText={setButtonText} />
                )}
              </FModal>
            </li>
          </ul>
          <div className="lg:hidden">
            <div className="flex items-center gap-2.5">
              <FModal>
                {buttonText === 0 ? (
                  <LoginModal setButtonText={setButtonText} />
                ) : (
                  <SignUpModal setButtonText={setButtonText} />
                )}
              </FModal>

              <button
                className="bg-primary p-1 rounded-full text-white "
                onClick={() => setIsMenuOpen(true)}
              >
                <CgMenuRight className="size-6 text-white" />
              </button>
            </div>
            {isMenuOpen && (
              <div className="absolute z-50 top-0 left-0 w-full">
                <div className="p-5 bg-gradient-to-r from-[#3F261B] to-[#0F030A] rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <img className="w-[100px]" src={logo} alt="" />
                    </div>
                    <div>
                      <button className="" onClick={() => setIsMenuOpen(false)}>
                        <CgCloseO className="size-8 text-white" />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {navList.map((item, i: number) => (
                        <FNavLink item={item} key={i} />
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
