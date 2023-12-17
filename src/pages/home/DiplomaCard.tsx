import images from "../../constant/images.js";
import { BsDot } from "react-icons/bs";

const DiplomaCard = () => {
  return (
    <div className="py-48  ">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 relative">
        {/* Card One  */}
        <div className=" w-full  bg-gradient-to-r from-[#434b3c] to-[#202020] border-[1px] border-zinc-400 rounded-xl  pb-20 p-5 md:p-14 md:h-[500px]  text-light-3 textMono ">
          <h1 className=" text-4xl font-semibold text">
            Get your digital diploma!
          </h1>
          <div className="tracking-widest	mt-4 text-xl">
            Depending on the completed programs, you will receive:
          </div>
          <div className="tracking-widest	mt-4 text-xl flex flex-col gap-4 ">
            <div className=" flex justify-start items-center">
              <div className=" w-10">
                <BsDot className=" text-3xl" />
              </div>
              <div className="">Individual Course Certificate;</div>
            </div>
            <div className=" flex justify-start items-center">
              <div className=" w-10">
                <BsDot className=" text-3xl" />
              </div>
              <div className="">
                Diploma of Specialization for a set of courses combined into a
                common program;
              </div>
            </div>
            <div className=" flex justify-start  items-center">
              <div className="w-10">
                <BsDot className=" text-3xl" />
              </div>
              <div className="">
                An electronic copy for posting on social networks;
              </div>
            </div>
          </div>

          {/* <h5 className="  text-zinc-500 tracking-widest text-sm mt-32">
                  Diploma Education stores accreditation data that your employer
                  can see
                </h5> */}
        </div>

        {/* Card Two  */}
        <div className="bg-diplomacardbg bg-cover bg-no-repeat bg-center w-full border-[1px] border-lime-400 rounded-xl relative overflow-hidden h-[500px] xl:h-[500px] p-14">
          <h3 className=" text  text-xl tracking-wider font-semibold">
            And post it on linkedIn
          </h3>
          <img
            src={images.diplomacard}
            alt=""
            className="w-[400px] h-[350px] md:w-[600px] md:h-[430px] right-0 absolute bottom-0"
          />
        </div>

        <div className=" absolute left-0 right-0 -bottom-8 md:bottom-0 top-0">
          <div className="flex justify-center h-full w-full items-center">
            <div className=" h-36 w-36 md:h-40 md:w-40 rounded-full bg-gradient-to-r from-[#73d2a5] to-[#d0e537] text-dark-1 flex justify-center items-center">
              <h1 className="w-full font-bold text-md md:text-lg text-center -rotate-12">
                International Diploma
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiplomaCard;
