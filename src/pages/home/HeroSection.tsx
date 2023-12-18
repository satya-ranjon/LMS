import React from "react";
import Button, { ButtonSize } from "../../components/common/Button";
import Container from "../../components/common/Container";
import { images } from "../../constant";

const HeroSection: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: 'url("./homebg.png")' }}
      className={` w-full bg-no-repeat bg-cover  bg-center `}>
      <Container>
        <div className=" flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-center py-24">
          <div className="">
            <div className=" flex flex-col gap-2 md:border-l-[3px] pl-5 border-l-lime-500">
              <span className="text-center md:text-start text-light-1 text-3xl lg:text-5xl font-bold">
                Education - Learning
              </span>
              <span className="text-center md:text-start text text-2xl lg:text-4xl font-bold  tracking-tight">
                without limits!
              </span>
            </div>

            <div className=" mt-10 flex flex-col md:flex-row  gap-4">
              <Button size={ButtonSize.LG}>Join For Free</Button>
              <Button size={ButtonSize.LG} outline={true}>
                Login For LMS
              </Button>
            </div>
          </div>
          <div className=" pointer-events-none select-none">
            <img
              src={images.certificate}
              className="w-[340px] h-[300px] lg:w-[440px] lg:h-[480px] xl:w-[640px] xl:h-[580px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
