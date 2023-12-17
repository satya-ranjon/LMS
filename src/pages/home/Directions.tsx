import React from "react";
import Button from "../../components/common/Button";
const courseType = [
  {
    img: "https://i.ibb.co/2tZzHyV/Business.jpg",
    name: "Business",
    total: 5,
  },
  {
    img: "https://i.ibb.co/SV1ZtNc/Technology.jpg",
    name: "Technology",
    total: 4,
  },
  {
    img: "https://i.ibb.co/xzKSDcr/Lifestyle.jpg",
    name: "Lifestyle",
    total: 5,
  },
  {
    img: "https://i.ibb.co/NjYT4vS/Creative.jpg",
    name: "Creative",
    total: 5,
  },
];
const Directions: React.FC = () => {
  return (
    <>
      <h1 className=" text-center text-2xl md:text-4xl lg:text-5xl font-bold text">
        Directions of specializations:
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-between items-center mt-16">
        {courseType.map((item, i) => (
          <div className=" group relative h-32 w-full" key={i}>
            <img src={item.img} alt={item.name} className=" h-full w-full" />
            <div className=" absolute top-0 left-0 right-0 bottom-0 cursor-pointer bg-[#0000005a] text-light-1  group-hover:text-dark-1 group-hover:bg-gradient-to-r from-[#73d2a69a] to-[#d1e5379d] duration-200 transition-all">
              <div className=" flex flex-col justify-center items-center h-full w-full ">
                <h1 className=" text-3xl font-bold ">{item.name}</h1>
                <span className=" text-lg font-normal">
                  Available programs: {item.total}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center py-10">
        <Button outline={true}> See Full List</Button>
      </div>
    </>
  );
};

export default Directions;
