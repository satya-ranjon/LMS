import Container from "../../components/common/Container";
import blogs from "../../data/blog.json";
import { timeFormatDMY } from "../../utils/timeFormat";
import Avatar from "../../components/common/Avatar";
import Button from "../../components/common/Button";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";

const Blogs: React.FC = () => {
  return (
    <div className=" bg-dark-3 py-16 md:py-28 lg:py-36">
      <h1
        className=" text-center text font-bold text-2xl md:text-4xl lg:text-5xl "
        style={{ lineHeight: "4rem" }}>
        Blog
      </h1>
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
          {blogs.map((item) => (
            <div
              key={item._id}
              className=" relative bg-dark-1 overflow-hidden rounded-xl">
              <img src={item.img} alt="" className=" h-[220px] w-full" />
              <div className=" p-6">
                <div className="flex w-full justify-between items-center text-zinc-600 text-sm">
                  <span>{item.views}</span>
                  <span> {timeFormatDMY(item.createAt)}</span>
                </div>
                <h1 className=" text-xl mt-3 font-semibold text-light-3">
                  {item.title.slice(0, 80)}
                  {item.title?.length > 80 && "...."}
                </h1>
                <div className="flex justify-start items-center mt-3 gap-3">
                  <Avatar url={item.author?.avatar} />
                  <div className=" text-sm">
                    <h6 className=" text-zinc-600">
                      {item.author?.profession} | {item.author?.company}
                    </h6>
                    <h4 className=" text-md text-light-3">
                      {item.author?.name}
                    </h4>
                  </div>
                </div>
              </div>
              <div className=" absolute top-5 left-5 flex justify-start items-center gap-2">
                {item?.tags?.map((item, i) => (
                  <span
                    className="text-xs  rounded-sm px-2 py-1 bg-gradient-to-r from-[#73d2a5] to-[#d0e537] font-semibold"
                    key={i}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-center items-center mt-8">
          <Button outline={true}>
            <div className=" flex justify-start gap-2 items-center">
              <span>Other articles</span>
              <IoIosArrowForward className=" text-lime-500" />
            </div>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
