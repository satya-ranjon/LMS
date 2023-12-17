import Container from "../../components/common/Container";
import images from "../../constant/images.js";
import Button, { ButtonSize } from "../../components/common/Button.js";
import React from "react";

const ChooseCourse: React.FC = () => {
  return (
    <div className=" py-24 md:py-36 bg-gradient-to-r from-[#73d2a6c7] to-[#d1e537c7]  ">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="w-full select-none pointer-events-none">
            <img src={images.choosecourse} alt="" className=" w-full" />
          </div>
          <div className="w-full tracking-widest text-dark-1 text-center md:text-start ">
            <h1 className=" text-xl md:text-2xl lg:text-4xl font-bold  ">
              Can't choose a course?
            </h1>
            <h5 className="text-md md:text-xl lg:text-2xl font-normal mt-4 md:mt-8 textMono">
              Fill out the form and take a short test that will help you choose
              the right course!
            </h5>
          </div>
        </div>

        <div
          className=" bg-dark-1 py-8 flex flex-col md:flex-row justify-center items-center gap-5 mt-20 rounded-xl lg:mx-10 
         px-5 md:px-10 lg:px-20">
          <div className=" flex flex-col gap-3 w-full">
            <label htmlFor="name" className=" text-zinc-400">
              Your name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className=" w-full bg-dark-3 p-2 rounded-md text-zinc-300 placeholder:text-zinc-500"
            />
          </div>
          <div className=" flex flex-col gap-3  w-full  justify-center ">
            <label htmlFor="email" className=" text-zinc-400">
              Your email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Enter your email"
              className=" w-full bg-dark-3  p-2 rounded-md text-zinc-300 placeholder:text-zinc-500"
            />
          </div>

          <div className="w-full mt-8 flex justify-center items-center">
            <Button size={ButtonSize.LG}>Take the test</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseCourse;
