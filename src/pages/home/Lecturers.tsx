import Container from "../../components/common/Container";

const lectturers = [
  {
    img: "https://i.ibb.co/6Rd0L27/2.png",
    name: "Evgenly Danilko",
    profession: "Senior Software Engineer",
    company: "Google Inc",
  },
  {
    img: "https://i.ibb.co/k3G7Csn/8.png",
    name: "Christopher Brown",
    profession: "Lead QA Engineer",
    company: "IBM",
  },
  {
    img: "https://i.ibb.co/3FBjvq6/Screenshot-2023-11-02-000525.png",
    name: "Nikolay Ivanov",
    profession: "Lead UI/UX Designer",
    company: "Clickoble",
  },
  {
    img: "https://i.ibb.co/K6LTL6L/Screenshot-2023-11-02-000400.png",
    name: "Abigali Miller",
    profession: "Senior UX Designer",
    company: "Microsoft",
  },
  {
    img: "https://i.ibb.co/G3DWVmB/Screenshot-2023-11-02-000434.png",
    name: "Andrea Campbell",
    profession: "Senior DevOps",
    company: "Nvidia",
  },
  {
    img: "https://i.ibb.co/cw2Sxbg/Screenshot-2023-11-02-000512.png",
    name: "Emma Ramirez",
    profession: "Lead Game Designer",
    company: "Microsoft Game Studios",
  },
  {
    img: "https://i.ibb.co/cgK7wXX/Screenshot-2023-11-02-000543.png",
    name: "Michael Smith",
    profession: "Lead 3D Designer",
    company: "Pixar",
  },
];
const Lecturers = () => {
  return (
    <div className=" bg-gradient-to-r from-[#73d2a6c7] to-[#d1e537c7] py-36">
      <Container>
        <h1 className=" text-center text-dark-1 font-bold text-2xl md:text-4xl lg:text-5xl">
          Lecturers from Top Companies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
          {lectturers.map((item, i) => (
            <div
              key={i}
              className={` ${i === 5 && "lg:col-span-2"}  ${
                i === 0 && "md:col-span-2 lg:col-span-1"
              } shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-2xl`}>
              <div className=" w-full flex justify-center items-center">
                <div className=" w-40 h-40 overflow-hidden rounded-full">
                  <img src={item.img} alt="" className=" w-full h-full" />
                </div>
              </div>
              <div className=" text-center text-dark-2 flex flex-col gap-4 py-4">
                <h1 className=" text-2xl font-bold border-b-[2px] border-dark-2 pb-3">
                  {item.name}
                </h1>
                <h2 className=" text-xl font-semibold">{item.profession}</h2>
                <h2 className=" text-md font-semibold">{item.company}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex justify-center items-center">
          <button className=" border-[2px] border-dark-2 px-3 py-1 rounded-lg font-normal text-xl flex gap-2 items-center justify-center">
            <span> See All Lecturers</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Lecturers;
