import Container from "../../components/common/Container";
import images from "../../constant/images.js";

import {
  FaFileVideo,
  FaUserGraduate,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";
import PlayStor from "../../components/ui/PlayStor.js";
import React from "react";

const AnyDevice: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url("./bg5.png")` }}
      className=" bg-dark-1 bg-cover bg-no-repeat bg-center py-24 md:py-36 md:pb-48">
      <Container>
        <h1 className=" text-center text font-bold text-2xl md:text-4xl lg:text-5xl">
          Over 75,000 students daily!
        </h1>
        <div className="bg-gradient-to-r from-[#303030] to-[#212121] border-[1px] border-zinc-700 rounded-xl p-5 py-8 my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className=" flex justify-center md:justify-start items-center gap-3 border-b-[2px] md:border-b-[0px] pb-5 md:pb-0 md:border-r-[2px] border-zinc-500">
            <div className="">
              <FaFileVideo className=" text-5xl text-lime-400" />
            </div>
            <div className="">
              <div className="text text-xl font-bold">250+</div>
              <h3 className=" text-sm text-zinc-400">available courses</h3>
            </div>
          </div>
          <div className=" flex justify-center md:justify-start items-center gap-3 border-b-[2px] md:border-b-[0px] pb-5 md:pb-0 lg:border-r-[2px] border-zinc-500">
            <div className="">
              <FaUserGraduate className=" text-5xl text-lime-400" />
            </div>
            <div className="">
              <div className="text text-xl font-bold">100k</div>
              <h3 className=" text-sm text-zinc-400">studying students</h3>
            </div>
          </div>
          <div className=" flex justify-center md:justify-start items-center gap-3 border-b-[2px] md:border-b-[0px] pb-5 md:pb-0 md:border-r-[2px] border-zinc-500">
            <div className="">
              <FaUsers className=" text-5xl text-lime-400" />
            </div>
            <div className="">
              <div className="text text-xl font-bold">1300</div>
              <h3 className=" text-sm text-zinc-400">certified teachers</h3>
            </div>
          </div>
          <div className=" flex justify-center md:justify-start items-center gap-3 ">
            <div className="">
              <FaCalendarAlt className=" text-5xl text-lime-400" />
            </div>
            <div className="">
              <div className="text text-xl font-bold">4 years</div>
              <h3 className=" text-sm text-zinc-400">teaching for you</h3>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-between items-center gap-16 pt-12 md:pt-16 lg:mt-28 ">
          <div className="w-full flex flex-col gap-8 text-center md:text-start">
            <div className="md:border-l-[3px] pl-5 border-l-lime-500 text font-bold text-2xl lg:text-4xl xl:text-5xl">
              Learn from any device!
            </div>
            <h5 className="text-center md:text-start w-full tracking-widest text-sm lg:text-xl  font-normal text-light-3 textMono">
              With our Education app, the comfort of knowledge is in your
              pocket. Download faster!
            </h5>

            <PlayStor />
          </div>
          <div className="w-full">
            <img
              src={images.anydevice}
              alt=""
              className=" pointer-events-none"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AnyDevice;
