import React from "react";
import Container from "../../components/common/Container";
import { images } from "../../constant";

const brands = [
  { img: images.ibm },
  { img: images.intel },
  { img: images.amazon },
  { img: images.skype },
  { img: images.lg },
  { img: images.asus },
  { img: images.linkedin },
  { img: images.facebook },
];

const BrandList: React.FC = () => {
  return (
    <Container>
      <div className=" bg-dark-1 p-8 py-0 w-full rounded-xl grid grid-cols-2 md:grid-cols-4 items-center">
        {brands.map((item, i) => (
          <div className=" w-full flex justify-center items-center" key={i}>
            <img
              src={item.img}
              className=" w-44 h-24 pointer-events-none cursor-pointer select-none"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BrandList;
