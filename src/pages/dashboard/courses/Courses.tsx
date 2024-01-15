import React, { useState } from "react";
import { CourseViewData } from "../../../types";
import data from "../../../data/courses.json";
import CourseCard from "./CourseCard";

const filterOptions = [
  { label: "All", value: CourseViewData.ALL },
  { label: "In Progress", value: CourseViewData.PROGRESS },
  { label: "Passed", value: CourseViewData.PASSED },
];

const user = {
  progressCourses: ["01", "02"],
  passedCourses: ["03", "04", "05"],
};

const Courses: React.FC = () => {
  const [activeData, setActiveData] = useState<CourseViewData>(
    CourseViewData.ALL
  );

  const filterCourses = (filterValue: CourseViewData) => {
    if (filterValue === CourseViewData.ALL) {
      return data;
    } else if (filterValue === CourseViewData.PROGRESS) {
      return data.filter((item) => user.progressCourses.includes(item._id));
    } else if (filterValue === CourseViewData.PASSED) {
      return data.filter((item) => user.passedCourses.includes(item._id));
    }

    return [];
  };

  const courses = filterCourses(activeData);

  return (
    <div className="my-5">
      {/* Data filtering options  */}
      <div className="w-full flex justify-between items-center text-xl text-white bg-black p-2">
        {filterOptions.map((item) => (
          <button
            key={item.value}
            onClick={() => setActiveData(item.value)}
            className={`text-center w-full rounded py-1 ${
              activeData === item.value ? "bg-dark-1 " : "text-gray-500"
            }`}>
            {item.label}
          </button>
        ))}
      </div>

      {/* Show the user courses  */}
      <div className="grid grid-cols-2 gap-10 mt-5">
        {courses.map((course) => {
          if (!course._id || !course.name || !course.img) {
            return;
          }
          return (
            <CourseCard
              key={course._id}
              course={{
                _id: course._id,
                name: course.name || "",
                img: course.img || "",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
