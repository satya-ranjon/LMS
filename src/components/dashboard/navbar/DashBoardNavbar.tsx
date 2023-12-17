import { useState } from "react";
import { images } from "../../../constant";
import {
  PiNotebookFill,
  PiChatCircleTextFill,
  PiCalendarBlankFill,
  PiBookmarkFill,
  PiTrophyFill,
  PiVideoFill,
} from "react-icons/pi";
import Avatar, { AvatarSize } from "../../common/Avatar";
import LanguagesSelect from "../../common/LanguagesSelect";
import Nonfiction from "./Notification";
import Logo from "../../common/Logo";
import useDisplay from "../../../hooks/useDisplay";
import NavBarLink from "./NavBarLink";
import { Link } from "react-router-dom";

const DashBoardNavbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>();
  const [windowWidth] = useDisplay();

  const mobileMenu = windowWidth < 768;
  return (
    <div className=" bg-dark-1 md:rounded-lg">
      <div className="py-6 px-5 relative ">
        <div className=" flex justify-between items-center gap-4 lg:gap-8 z-50">
          <Link to="/" className=" md:hidden">
            <Logo />
          </Link>
          <div
            className={` ${
              mobileMenu
                ? `absolute ${
                    mobileMenuIsOpen ? "top-20 " : "-top-20"
                  } right-0 left-0  justify-center py-5 `
                : "justify-start "
            }  bg-dark-1  flex items-center gap-4 lg:gap-8 text-3xl duration-500  transition-all `}>
            <Link
              to="/"
              className=" hidden md:block pr-4 lg:pr-8 border-r-[2px] border-zinc-500">
              <img src={images.logo} alt="logo" className=" w-10 h-10" />
            </Link>
            <NavBarLink to="/dashboard/courses">
              <PiNotebookFill />
            </NavBarLink>
            <NavBarLink to="/dashboard/webinars">
              <PiVideoFill />
            </NavBarLink>
            <NavBarLink to="/dashboard/calendar">
              <PiCalendarBlankFill />
            </NavBarLink>
            <NavBarLink to="/dashboard/favorites">
              <PiBookmarkFill />
            </NavBarLink>
            <NavBarLink to="/dashboard/badges">
              <PiTrophyFill />
            </NavBarLink>
            <NavBarLink to="/dashboard/chat">
              <PiChatCircleTextFill />
            </NavBarLink>
          </div>
          <div className=" flex justify-start items-center gap-4 lg:gap-8 text-3xl text-zinc-500">
            <LanguagesSelect showIcon={true} />
            <Nonfiction />
            <div className="  md:hidden">
              <Avatar size={AvatarSize.SM} />
            </div>
            <div className=" hidden md:block">
              <Avatar />
            </div>
            {!mobileMenuIsOpen ? (
              <button
                onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                className="  md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-zinc-500 cursor-pointer ">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                className="  md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-zinc-500 cursor-pointer  ">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardNavbar;
