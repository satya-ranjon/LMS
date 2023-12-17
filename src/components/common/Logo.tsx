import { images } from "../../constant";

const Logo = () => {
  return (
    <div className=" select-none  flex justify-start gap-4 items-center w-fit cursor-pointer">
      <img
        src={images.logo}
        alt="logo"
        className="h-10 md:h-14 w-fit pointer-events-none"
      />
      <span className="text font-bold text-xl md:text-4xl">education</span>
    </div>
  );
};

export default Logo;
