import React from "react";
import { AiFillStar } from "react-icons/ai";
import createArrayUpToNumber from "../../utils/createArrayUpToNumber";
import { Gap } from "../../types/style";

export enum StarSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  gap?: Gap;
  size?: StarSize;
}

const ShowStarRating: React.FC<StarRatingProps> = ({
  rating = 5,
  maxRating = 5,
  gap = Gap["1D"],
  size = StarSize.MD,
}) => {
  return (
    <div className={`flex justify-start items-center ${gap}`}>
      {createArrayUpToNumber(rating).map((item) => (
        <AiFillStar
          key={item}
          className={`text-orange-400 
          ${size === StarSize.SM && "text-md"} 
          ${size === StarSize.MD && "text-lg"}
          ${size === StarSize.LG && "text-2xl"}
          `}
        />
      ))}
      {createArrayUpToNumber(maxRating - rating).map((item) => (
        <AiFillStar
          key={item}
          className={`text-zinc-600
          ${size === StarSize.SM && "text-md"} 
          ${size === StarSize.MD && "text-lg"}
          ${size === StarSize.LG && "text-2xl"}
          `}
        />
      ))}
    </div>
  );
};

export default ShowStarRating;
