import Container from "../common/Container";
import Logo from "../common/Logo";
import catagories from "../../data/catagories.json";
import PlayStor from "../ui/PlayStor";
import LanguagesSelect from "../common/LanguagesSelect";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-dark-1 py-14 md:py28">
      <Container>
        <div className=" flex flex-col gap-5 md:flex-row justify-between items-center">
          <Logo />
          <PlayStor />
        </div>

        <div className=" grid grid-cols-3 gap-5 md:grid-cols-5 mt-8">
          {catagories.map((item, i) => (
            <div key={item.id}>
              <h1
                className={`
                ${i === 0 && "text-lime-300"} 
                ${i === 1 && "text-amber-300"} 
                ${i === 2 && "text-emerald-300"} 
                ${i === 3 && "text-cyan-300"} 
                ${i === 4 && "text-purple-300"} 
               text-md lg:text-xl font-semibold`}>
                {item.label}
              </h1>
              <ul className=" text-zinc-500 text-xs lg:text-sm space-y-2 mt-2">
                {item.catagories.map((c) => (
                  <li
                    key={c.id}
                    className=" hover:text-zinc-400 duration-300 transition-colors cursor-pointer">
                    {c.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className=" border-t-[1px] border-zinc-700 mt-5 flex flex-col md:flex-row gap-4 justify-between items-center py-8 text-zinc-500">
          <div className=" flex flex-col md:flex-row justify-start items-center gap-6">
            <span className=" hover:text-zinc-400 duration-300 transition-colors cursor-pointer">
              Personal LMS
            </span>
            <span className=" hover:text-zinc-400 duration-300 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className=" hover:text-zinc-400 duration-300 transition-colors cursor-pointer">
              Consent to data processing
            </span>
            <span className=" hover:text-zinc-400 duration-300 transition-colors cursor-pointer">
              Support
            </span>
          </div>
          <LanguagesSelect />
        </div>

        <div className=" flex flex-col justify-center md:justify-between items-center md:flex-row-reverse gap-4">
          <div className=" flex flex-col md:flex-row  gap-4 justify-center items-center">
            <h4 className=" text-lg text-zinc-500">
              <span className=" text-lime-400">589740</span> Subscribers
            </h4>
            <div className=" flex justify-center items-center gap-3 text-zinc-500">
              <button className=" text-xl p-2 border-[2px] rounded-md border-zinc-600">
                <FaFacebookF />
              </button>
              <button className=" text-xl p-2 border-[2px] rounded-md border-zinc-600">
                <RiTwitterXFill />
              </button>
              <button className=" text-xl p-2 border-[2px] rounded-md border-zinc-600">
                <FaInstagram />
              </button>
              <button className=" text-xl p-2 border-[2px] rounded-md border-zinc-600">
                <AiFillLinkedin />
              </button>
              <button className=" text-xl p-2 border-[2px] rounded-md border-zinc-600">
                <AiFillYoutube />
              </button>
            </div>
          </div>
          <h1 className=" text-zinc-500 text-sm">
            © Education Inc 2023 all rights reserved
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
