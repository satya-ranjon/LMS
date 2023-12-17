import BrandList from "./BrandList.js";
import Directions from "./Directions.js";
import HeroSection from "./HeroSection.jsx";
import Container from "../../components/common/Container";
import DiplomaCard from "./DiplomaCard.js";
import ChooseCourse from "./ChooseCourse.js";
import LmsOverview from "./LmsOverview.js";
import Lecturers from "./Lecturers.js";
import AnyDevice from "./AnyDevice.js";
import FreeLessons from "./FreeLessons.js";
import Reviews from "./Reviews.js";
import Blogs from "./Blogs.js";
import Subscribe from "./Subscribe.js";
import AnswersQuestion from "./AnswersQuestion.js";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <div className="absolute -bottom-80 md:-bottom-36 w-full ">
          <BrandList />
        </div>
      </div>
      <div className=" pt-96 md:pt-64 pb-20 bg-dark-1 bg-bg2 bg-cover bg-no-repeat bg-center">
        <Container>
          <Directions />
          <DiplomaCard />
        </Container>
        <FreeLessons />
      </div>
      <ChooseCourse />
      <LmsOverview />
      <Lecturers />
      <AnyDevice />
      <Reviews />
      <Blogs />
      <Subscribe />
      <AnswersQuestion />
    </>
  );
};

export default Home;
