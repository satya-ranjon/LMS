import { BiSolidDownArrow } from "react-icons/bi";
import Container from "../../components/common/Container";
import answersQuestion from "../../data/answersQuestion.json";
import { useState } from "react";
import { motion } from "framer-motion";

const modalVariants = {
  hidden: {
    opacity: 0,
    y: "10%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const AnswersQuestion = () => {
  const [active, setActive] = useState<number>(1);

  const handleActive = (value: number) => {
    setActive(value);
  };

  return (
    <div className=" bg-dark-3 py-14 md:py-36">
      <h1
        className=" text-center text font-bold text-2xl md:text-4xl lg:text-5xl "
        style={{ lineHeight: "4rem" }}>
        Answers to popular questions
      </h1>
      <Container>
        <div className="mt-14">
          {answersQuestion.map((item, index) => {
            const activeDrawer = index === active;
            return (
              <div key={item._id}>
                <div
                  onClick={() => handleActive(index)}
                  className="flex justify-between w-full items-center py-4 cursor-pointer border-b-[1px] border-zinc-700">
                  <h3 className=" text-xl text-light-3">{item.question}</h3>
                  <button
                    className={` ${
                      activeDrawer
                        ? " bg-lime-400 text-zinc-700 border-lime-400 rotate-180"
                        : "text-lime-400 border-zinc-700"
                    } text-sm p-2  rounded-full border-[2px] transition-all duration-300 `}>
                    <BiSolidDownArrow />
                  </button>
                </div>
                <div>
                  {activeDrawer && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={modalVariants}
                      className="text-zinc-500 p-5">
                      {item.answers}
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default AnswersQuestion;
