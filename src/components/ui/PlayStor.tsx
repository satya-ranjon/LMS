import { BsApple, BsGooglePlay } from "react-icons/bs";

const PlayStor = () => {
  return (
    <div className=" flex justify-center md:justify-start items-center text-light-1 gap-10">
      <button className=" flex justify-start items-center gap-1 lg:gap-3 text-start border-[2px] px-2 py-1 lg:px-4 lg:py-2 rounded-xl">
        <BsGooglePlay className="text-2xl lg:text-4xl" />
        <div className="">
          <h6 className=" text-xs lg:text-sm text-light-3 ">GET IT ON</h6>
          <h1 className=" font-semibold text-sm lg:text-xl ">Google Play</h1>
        </div>
      </button>
      <button className=" flex justify-start items-center gap-1 lg:gap-3 text-start border-[2px] px-2 py-1 lg:px-4 lg:py-2 rounded-xl">
        <BsApple className="text-2xl lg:text-4xl" />
        <div className="">
          <h6 className=" text-xs lg:text-sm text-light-3 ">Download on the</h6>
          <h1 className=" font-semibold text-sm lg:text-xl">App Store</h1>
        </div>
      </button>
    </div>
  );
};

export default PlayStor;
