import Container from "../../components/common/Container";
import Navbar from "../../components/navbar";
import { images } from "../../constant";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div
        className={` w-full bg-no-repeat bg-cover  bg-center bg-hero-pattern  `}>
        <Container>
          <div className=" flex justify-between items-center py-40">
            <div className=""></div>
            <div className="">
              <img src={images.certificate} className=" w-full" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
