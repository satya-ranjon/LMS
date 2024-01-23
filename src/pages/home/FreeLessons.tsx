import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import React, { useState, useRef } from "react";
import courses from "../../data/courses.json";
import { BsBookmark } from "react-icons/bs";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Avatar from "../../components/common/Avatar";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

// Custom component for the previous button
const Button1: React.FC<{
  left?: string;
  right?: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, left, right, children }) => (
  <button
    className="p-2 absolute top-3/4 md:top-1/2 transform -translate-y-1/2 text-white flex justify-center items-center z-50 text-4xl bg-dark-3 hover:bg-dark-2 duration-300 transition-colors rounded-full"
    style={{ left: left, right: right }}
    onClick={onClick}>
    {children}
  </button>
);

const FreeLessons: React.FC = () => {
  const [isActiveSlideIndex, setIsActiveSlideIndex] = useState<number>(1);

  const sliderRef = useRef<SwiperRef>();

  const handleSlideNext = () => {
    sliderRef.current?.swiper.slideNext();
  };

  const handleSlidePrev = () => {
    sliderRef.current?.swiper.slidePrev();
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
      <div className=" mt-16 relative">
        <Container>
          <Swiper
            ref={sliderRef as React.RefObject<SwiperRef>}
            spaceBetween={30}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={(swiper) => {
              setIsActiveSlideIndex(swiper.activeIndex + 1);
            }}
            className="mySwiper">
            {courses.map((item, i) => {
              const middleSlider = i === isActiveSlideIndex;
              if (!item.img) {
                return (
                  <SwiperSlide key={i}>
                    <div
                      key={i}
                      className="h-[440px] cursor-pointer w-full lg:h-[440px] bg-[#2d2d32] flex rounded-2xl justify-center items-center">
                      <button className=" cursor-pointer text-xl text font-semibold">
                        See All
                      </button>
                    </div>
                  </SwiperSlide>
                );
              }
              return (
                <SwiperSlide key={i}>
                  <div
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
                        {item.name.slice(0, 45)}
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
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Button1 onClick={handleSlidePrev} left="7%">
            <MdOutlineArrowBackIosNew />
          </Button1>
          <Button1 onClick={handleSlideNext} right="7%">
            <MdOutlineArrowForwardIos />
          </Button1>
        </Container>
      </div>
    </>
  );
};

export default FreeLessons;
