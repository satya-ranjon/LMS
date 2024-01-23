import Avatar, { AvatarSize } from "../../components/common/Avatar";
import Container from "../../components/common/Container";
import ShowStarRating, {
  StarSize,
} from "../../components/common/ShowStarRating";
import reviews from "../../data/reviews.json";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { TbWorldStar } from "react-icons/tb";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import React, { useRef } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { RoundedButton } from "./FreeLessons";
import useDisplay from "../../hooks/useDisplay";
import "swiper/swiper-bundle.css";

const Reviews: React.FC = () => {
  const sliderRef = useRef<SwiperRef>();
  const [windowWidth] = useDisplay();

  const handleSlideNext = () => {
    sliderRef.current?.swiper.slideNext();
  };

  const handleSlidePrev = () => {
    sliderRef.current?.swiper.slidePrev();
  };
  return (
    <div className="bg-gradient-to-r from-[#73d2a6c7] to-[#d1e537c7] py-24 md:py-36">
      <Container>
        <h1 className=" text-center text-dark-1 font-bold text-2xl md:text-4xl lg:text-5xl">
          Reviews of our platform
        </h1>
        <div className="mt-14 md:mt-24 relative">
          <Swiper
            ref={sliderRef as React.RefObject<SwiperRef>}
            loop={true}
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
            }}
            className="mySwiper">
            {reviews?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="p-4 md:p-8 bg-dark-1 rounded-md mx-2 lg:mx-5">
                  <div className="flex justify-between">
                    <span className="text-xs  rounded-sm px-2 py-1 bg-gradient-to-r from-[#73d2a5] to-[#d0e537] font-semibold">
                      {item.tag}
                    </span>
                    <ShowStarRating rating={4} size={StarSize.MD} />
                  </div>
                  <h5 className=" pt-4 text-zinc-500 textMono text-sm md:text-md tracking-widest	">
                    {item.description}
                  </h5>
                  <div className=" flex justify-start gap-2 items-center mt-2">
                    <Avatar url={item.author.avatar} size={AvatarSize.SM} />
                    <span className=" text-zinc-500 text-sm">
                      {item.author.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <RoundedButton
            onClick={handleSlidePrev}
            left={windowWidth > 1025 ? "-4%" : "5%"}>
            <MdOutlineArrowBackIosNew />
          </RoundedButton>
          <RoundedButton
            onClick={handleSlideNext}
            right={windowWidth > 1025 ? "-4%" : "5%"}>
            <MdOutlineArrowForwardIos />
          </RoundedButton>
        </div>
        <div className=" grid grid-cols-1  md:grid-cols-3 text-md font-bold mt-14 bg-[#ffffff5b] rounded-md overflow-hidden">
          <div className=" flex justify-center items-center gap-2 py-6 border-b-2 md:border-b-0  md:border-r-2 border-zinc-600">
            <TbWorldStar className="text-3xl" />
            <span>1900+ review on our site</span>
          </div>
          <div className=" flex justify-center items-center gap-2 py-6 border-b-2 md:border-b-0  md:border-r-2 border-zinc-600">
            <BiLogoLinkedin className="text-3xl" />
            <span>1400+ review on LinkedIn</span>
          </div>
          <div className=" flex justify-center items-center gap-2 py-6 ">
            <AiOutlineGoogle className="text-3xl" />
            <span>3200+ review on Google</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
