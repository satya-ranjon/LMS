import ProgressBar from "../../../components/common/ProgressBar";

interface CourseProps {
  course: {
    _id: string;
    name: string;
    img: string;
  };
}

const CourseCard: React.FC<CourseProps> = ({ course }) => {
  const lastLesson = "Drawing & Animation. Most powerful tools overview";

  return (
    <div key={course._id} className="rounded-md overflow-hidden">
      <img
        src={course.img}
        alt={course.name}
        className="w-full h-56 lg:h-72 xl:h-80"
      />
      <div className="p-3 py-4 bg-dark-1 w-full text-white">
        <h1 className="text-xl font-bold">
          {course.name?.slice(0, 55)}
          {course.name && course.name?.length > 55 && ".."}
        </h1>
        <h2 className="my-2 text-gray-400 text-sm">
          Last Lesson:
          <span className="text-lime-500">{lastLesson}</span>
        </h2>
        {/* Progress Bar  */}
        <div className="w-full mt-3">
          <ProgressBar progress={50} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
