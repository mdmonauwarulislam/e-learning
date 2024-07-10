import { useEffect, useRef, useState } from "react";
import OpenCourseCard from "../Components/OpenCourseCard";
import axios from "axios";
import API from "../../env";

function CourseOpen() {
  const videoRef = useRef(null);
  const [courses, setCourses] = useState([]);

  const handleViewCourses = async () => {
    try {
      const response = await axios.get(`${API}/view-single-course`);
      if (response.status === 200) {
        setCourses(response.data.data);
      }
    } catch (error) {
      console.log("Courses not showing", error);
    }
  };

  useEffect(() => {
    handleViewCourses();
  }, []);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;

    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  return (
    <div className="pt-16 pb-20 bg-grayBg">
      <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto">
      {courses.length > 0 && (
          <>
            <div className="md:w-1/2 text-[28px] md:text-[38px] xl:text-[48px] font-semibold md:pr-4 text-grayH">
              <h3>{courses[0].title}</h3>
            </div>
            <div className="md:w-1/2 text-[14px] md:text-[16px] xl:text-[18px] text-grayPara md:inline md:py-4 md:pl-4 mt-2 md:mt-0 text-justify">
              {courses[0].description}
            </div>
          </>
        )}
      </div>
      <div className="border border-grayColor mx-auto max-w-[1450px] my-12"></div>

      <div className="bg-grayBg">
        <div className="flex items-center justify-center xl:mt-0 md:mt-[-300px] mt-[-480px] mx-4 max-w-[1280px] xl:mx-auto max-h-[675px]">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1100px",
              maxHeight: "675px",
              margin: "auto",
            }}
          >
            <video
              ref={videoRef}
              width="100%"
              controls={true}
              className="rounded"
            >
              {/* <source src={currentVideoUrl} type="video/mp4" /> */}
            </video>
            <button onClick={handlePlayPause}></button>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 max-w-[1280px] xl:mx-auto gap-6 mt-10">
      {courses.length > 0 && courses[0].subCourse && courses[0].subCourse.map((subCourse, index) => (
          <OpenCourseCard key={index} subCourse={subCourse} />
      ))}
      </div>
    </div>
  );
}

export default CourseOpen;
