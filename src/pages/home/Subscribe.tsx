import React from "react";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";

const Subscribe: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#73d2a6c7] to-[#d1e537c7] py-24 xl:px-48">
      <Container>
        <div className=" bg-dark-1 py-8 grid   grid-cols-1 md:grid-cols-2 px-5 text-center md:text-start md:px-14 xl:px-28 text-zinc-400 rounded-2xl gap-4">
          <div className="">
            Subscribe to <span className=" text">Education</span>! Stay up to
            date with programs announcements!
          </div>
          <form className=" bg-dark-3 flex justify-between p-1 rounded-md">
            <input
              type="text"
              placeholder=" Enter your email"
              className=" text-lg outline-none w-full bg-transparent px-2 placeholder:text-zinc-600"
            />
            <Button>Subscribe</Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
