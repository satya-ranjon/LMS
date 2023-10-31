import { images } from "../../constant";

const Logo = () => {
  return (
    <div className=" flex justify-start gap-4 items-center w-fit">
      <img src={images.logo} alt="" className="h-10 md:h-14 w-fit" />
      <span className="text font-bold text-xl md:text-4xl">education</span>
    </div>
  );
};

export default Logo;
