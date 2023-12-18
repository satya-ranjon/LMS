import React from "react";
import Container from "../../components/common/Container";
import images from "../../constant/images.js";

const LmsOverview: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url("./bg4.png")` }}
      className="bg-cover bg-no-repeat bg-center">
      <Container>
        <div className=" flex flex-col md:flex-row  justify-center items-center gap-16 pt-28">
          <div className="w-full flex flex-col gap-8 items-start justify-center">
            <div className="text-center md:text-start w-full md:border-l-[3px] border-l-lime-300 text text-2xl lg:text-3xl xl:text-5xl font-bold pl-5">
              <h1>Learn effectively with</h1>
              <h1>Education LMS!</h1>
            </div>
            <h5 className="text-center md:text-start w-full tracking-widest text-sm lg:text-xl font-normal text-light-3 textMono">
              A convenient learning management system (LMS) allows students to
              effectively communicate with the curriculum and teachers, monitor
              learning progress, complete homework, and much more.
            </h5>
          </div>
          <div className="w-full">
            <img src={images.effectfily} alt="" />
          </div>
        </div>
        <div className=" flex flex-col-reverse  md:flex-row  justify-center items-center gap-16 py-28">
          <div className="w-full">
            <img src={images.knowlagdge} alt="" />
          </div>

          <div className="w-full flex flex-col gap-8 items-start justify-center">
            <div className="text-center md:text-start w-full md:border-l-[3px] border-l-lime-300 text text-2xl lg:text-3xl xl:text-5xl font-bold pl-5">
              <h1>Absorb knowledge at your</h1>
              <h1>own pace!</h1>
            </div>
            <h5 className="text-center md:text-start w-full tracking-widest text-sm lg:text-xl  font-normal text-light-3 textMono">
              The entire curriculum is available on tape, so you can complete
              the course quickly or take your time. Everything is based on the
              principle of Life-Long-Learning, which allows you to effectively
              achieve high results.
            </h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LmsOverview;
