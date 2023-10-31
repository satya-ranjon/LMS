import Button, { ButtonSize } from "../common/Button";
import Container from "../common/Container";
import Select from "../common/Select";
import Logo from "../common/Logo";
import useDisplay from "../../hooks/useDisplay";
import { useLayoutEffect, useState } from "react";

const menu = [
  { link: "/", name: "Explore" },
  { link: "/", name: "List of courses" },
  { link: "/", name: "Lectors" },
  { link: "/", name: "Career" },
  { link: "/", name: "Certificates" },
  { link: "/", name: "Reviews" },
  { link: "/", name: "About project" },
];

const languages = [
  { value: "eng", label: "ENG" },
  { value: "bng", label: "BNG" },
];

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);
  const [windowWidth, scrollY] = useDisplay();
  console.log(windowWidth);

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

  const handleSelectLanguage = (value: object) => {
    // console.log("value", value);
  };
  return (
    <div className="bg-dark-1 py-4">
      <Container>
        <div className=" flex justify-between items-center">
          <div className=" flex justify-start gap-10 items-center">
            <Logo />

            {mobileMenuIsOpen && (
              <div
                className={`text-light-1 ${
                  windowWidth > 1024
                    ? "  flex gap-5 text-md font-semibold justify-start items-center "
                    : " absolute bg-dark-1 top-20 w-[250px] h-screen right-0 px-3"
                }`}>
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
                <div
                  className={`${
                    windowWidth > 1024 ? "hidden" : " flex gap-3"
                  }`}>
                  <span> Language</span>
                  <Select
                    // label=""
                    defaultSelectedIndex={0}
                    options={languages}
                    onOptionSelected={handleSelectLanguage}
                  />
                </div>
              </div>
            )}
          </div>
          <div className=" flex justify-start items-center gap-2 md:gap-5 ">
            <Button size={ButtonSize.SM}>Personal LMS</Button>
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
              <Select
                // label=""
                defaultSelectedIndex={0}
                options={languages}
                onOptionSelected={handleSelectLanguage}
              />
              b
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
