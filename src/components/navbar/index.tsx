import Button, { ButtonSize } from "../common/Button";
import Container from "../common/Container";
import Logo from "../common/Logo";
import useDisplay from "../../hooks/useDisplay";
import { useLayoutEffect, useState } from "react";
import LanguagesSelect from "../common/LanguagesSelect";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const menu = [
  { link: "/", name: "Explore" },
  { link: "/", name: "List of courses" },
  { link: "/", name: "Lectors" },
  { link: "/", name: "Career" },
  { link: "/", name: "Certificates" },
  { link: "/", name: "Reviews" },
  { link: "/", name: "About project" },
];

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);
  const [windowWidth] = useDisplay();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (windowWidth > 1024) {
      setMobileMenuIsOpen(true);
      return;
    }
    setMobileMenuIsOpen(false);
  }, [windowWidth]);

  const handleMobileMenu = () => {
    setMobileMenuIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-dark-1 py-4">
      <Container>
        <div className=" flex justify-between items-center">
          <div className=" flex justify-start gap-10 items-center">
            <Logo />

            {mobileMenuIsOpen && (
              <div
                className={`text-light-1 z-50 ${
                  windowWidth > 1024
                    ? "  flex gap-5 text-base font-semibold justify-start items-center "
                    : " fixed bg-dark-1 top-0 w-[250px] h-screen right-0 px-3"
                }`}>
                <div
                  className={`${
                    windowWidth > 1024 ? "hidden" : " "
                  } w-full py-6 px-2`}>
                  <button onClick={handleMobileMenu}>
                    <IoMdClose className="text-4xl duration-300 transition-colors hover:text-lime-400" />
                  </button>
                </div>
                {menu.map((item, i) => (
                  <div
                    className={`${
                      windowWidth > 1024
                        ? ""
                        : " text-center py-3 hover:bg-gradient-to-r from-[#73d2a5] to-[#d0e537] hover:text-dark-1 cursor-pointer"
                    }`}
                    key={i}>
                    {item.name}
                  </div>
                ))}
                <div className={`${windowWidth > 1024 ? "hidden" : " "}`}>
                  <span className=" pb-2"> Language</span>
                  <LanguagesSelect />
                </div>
              </div>
            )}
          </div>
          <div className=" flex justify-start items-center gap-2 md:gap-5 ">
            <Button
              onClick={() => navigate("/dashboard/courses")}
              size={ButtonSize.SM}>
              Personal LMS
            </Button>
            <button onClick={handleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-zinc-500 cursor-pointer  xl:hidden ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>

            <div className=" hidden xl:flex items-center justify-center ">
              <LanguagesSelect />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
