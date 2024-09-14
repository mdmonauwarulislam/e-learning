import { useEffect, useState } from "react";

import axios from "axios";
import API from "../../env"
import CourseCard from "../Components/CourseCard";

function Course() {
  const [courses, setCourses] = useState([]);
  const handleViewCourse = async () => {
    try {
      const response = await axios.get(`${API}/view-course-list`);
      if (response.status === 200) {
        setCourses(response.data.data)
      }
    } catch (error) {
      console.log("cousrse not showing", error)

    }
  }

  useEffect(() => {
    handleViewCourse()
  }, [])
  return (
    <div className="pt-16 bg-grayBg pb-4 font-be-vietnam-pro">
      <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto mx-4 pb-12">
        <div className="md:w-1/2 text-[28px] md:text-[38px] xl:text-[48px] font-semibold md:pr-4 text-grayH">
          <h3>
            Online Courses on Design and Development
          </h3>
        </div>
        <div className="md:w-1/2 text-[14px] md:text-[16px] xl:text-[18px] text-grayPara md:inline md:py-4 md:pl-4 mt-2 md:mt-0 text-justify">
          Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.
        </div>
      </div>
      <div className="border border-gray-200 mx-auto max-w-[1450px]"></div>
      <div
        className={`md:grid md:grid-cols-2 gap-4 md:pt-12 pt-3 space-y-4 md:space-y-0 max-w-[1280px] xl:mx-auto mx-4`}
      >
        {courses.map((item, index) => (
          <CourseCard
            key={index}
            course={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Course;
