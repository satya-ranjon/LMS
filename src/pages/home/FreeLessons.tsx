import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import { useState, useLayoutEffect } from "react";
import courses from "../../data/courses.json";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import useDisplay from "../../hooks/useDisplay";
import Avatar from "../../components/common/Avatar";

const FreeLessons = () => {
  const [[start, end], setPage] = useState([0, 3]);
  const [dotActive, setDotActive] = useState<number>(0);
  const [windowWidth] = useDisplay();

  useLayoutEffect(() => {
    if (windowWidth > 1024) {
      setPage([0, 3]);
    }
    if (windowWidth <= 1024) {
      setPage([0, 2]);
    }
    if (windowWidth <= 768) {
      setPage([0, 1]);
    }
  }, [windowWidth]);

  const sliderPrev = () => {
    if (start > 0) {
      setPage([start - 1, end - 1]);
      setDotActive((prev) => prev - 1);
    }
  };
  const sliderNext = () => {
    if (courses?.length > end) {
      setPage([start + 1, end + 1]);
      setDotActive((prev) => prev + 1);
    }
  };
  return (
    <>
      <Container>
        <div className=" flex justify-between">
          <h1 className=" text-2xl md:text-5xl font-bold text">
            See free lessons:
          </h1>
          <div className=""></div>
          <Button outline={true}>See All</Button>
        </div>
      </Container>
      <div className=" mt-16">
        <Container>
          <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-16 relative px-8 md:px-16 xl:px-0">
            {courses.slice(start, end).map((item, i) => {
              const middleSlider = !(windowWidth <= 1024) && (i + 1) % 2 === 0;
              if (!item.img) {
                return (
                  <div
                    key={i}
                    className=" h-96 cursor-pointer w-full lg:h-full bg-[#2d2d32] flex rounded-2xl justify-center items-center">
                    <button className=" cursor-pointer text-xl text font-semibold">
                      See All
                    </button>
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  className={` ${
                    middleSlider && "border-[1px] border-lime-700"
                  } rounded-2xl overflow-hidden relative bg-[#2d2d32]`}>
                  <div className="w-full h-[250px] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className=" w-full h-full opacity-70"
                    />
                  </div>
                  <div
                    className={` ${
                      middleSlider ? " bg-[#3a3a3f] " : "bg-[#2d2d32]"
                    } p-5 flex flex-col gap-4`}>
                    <div className="flex items-center justify-between text-sm text-zinc-400">
                      <span>{item.students} students</span>
                      <span>{item.durations}</span>
                    </div>
                    <h1 className=" text-light-3 font-bold text-xl">
                      {item.name.slice(0, 50)}
                      <span className=" text-xs font-normal">..more</span>
                    </h1>
                    <div className=" flex justify-start items-center gap-5">
                      <Avatar url={item?.author?.avatar} />
                      <h5 className=" text-zinc-400 text-md">
                        {item?.author?.name}
                      </h5>
                    </div>
                  </div>

                  <div className=" absolute top-0 left-0 right-0 ">
                    <div className=" flex justify-between items-center w-full p-4">
                      <div className="flex justify-start gap-3 items-center">
                        {item?.tags?.map((tag, i) => (
                          <span
                            key={i}
                            className=" text-xs px-2 py-1 bg-gradient-to-r from-[#73d2a5] to-[#d0e537] font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className=" text-light-1">
                        <BsBookmark className="text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div
              onClick={sliderPrev}
              className=" absolute top-[50%] left-0 xl:-left-20 text-light-1 text-xl md:text-2xl p-1 md:p-4 bg-dark-3 rounded-full hover:bg-dark-2 cursor-pointer duration-300 transition-colors ">
              <MdOutlineArrowBackIosNew />
            </div>
            <div
              onClick={sliderNext}
              className=" absolute top-[50%] right-0 xl:-right-20 text-light-1 text-xl md:text-2xl p-1 md:p-4 bg-dark-3 rounded-full hover:bg-dark-2 cursor-pointer duration-300 transition-colors">
              <MdOutlineArrowForwardIos />
            </div>
          </div>
        </Container>
        <div className=" w-full flex justify-center items-center mt-5 gap-2">
          {courses
            ?.slice(
              0,
              windowWidth <= 768
                ? courses?.length
                : windowWidth <= 1024
                ? courses?.length - 1
                : courses?.length - 2
            )
            .map((item, i) => {
              const active = dotActive === i;
              return (
                <span
                  key={i}
                  className={`${
                    active ? "bg-lime-400" : "bg-[#3a3a3f]"
                  } rounded-lg w-8 h-3 `}></span>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default FreeLessons;
