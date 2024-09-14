import { useEffect, useRef, useState } from "react";
import OpenCourseCard from "../Components/OpenCourseCard";
import axios from "axios";
import API from "../../env";
import { useLocation } from "react-router-dom";

function CourseOpen() {
  const videoRef = useRef(null);
  const [courses, setCourses] = useState([]);
  const [isEnrolled, setIsEnrolled] = useState(false); // To check enrollment status
  const location = useLocation();

  // Fetch the available courses
  const handleViewCourses = async () => {
    try {
      const courseId = location.pathname.split("/")[2];
      
      // Fetch course data
      const response = await axios.get(`${API}/view-single-course/${courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
        setCourses(response.data.data);
      }
    } catch (error) {
      console.error("Courses not showing", error);
    }
  };

  // Check if the user is enrolled
  const checkEnrollmentStatus = async () => {
    try {
      const courseId = location.pathname.split("/")[2];
      
      const response = await axios.get(`${API}/check-enrollment/${courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200 && response.data.enrolled) {
        setIsEnrolled(true);
      } else {
        setIsEnrolled(false);
      }
    } catch (error) {
      console.error("Error checking enrollment status", error);
    }
  };

  // Enroll in the course
  const handleEnroll = async () => {
    try {
      const courseId = location.pathname.split("/")[2];

      const response = await axios.post(
        `${API}/api/purchase-course`,
        { courseId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Successfully enrolled in the course!");
        setIsEnrolled(true); // Update state after successful enrollment
      }
    } catch (error) {
      console.error("Error enrolling in the course", error);
      alert("Failed to enroll. Please try again.");
    }
  };

  // Play or pause the video
  const handlePlayPause = () => {
    const videoElement = videoRef.current;

    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  useEffect(() => {
    handleViewCourses();
    checkEnrollmentStatus(); // Check enrollment on mount
  }, []);

  return (
    <div className="pt-16 pb-20 bg-grayBg">
    <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto">
    {courses  && (
        <>
          <div className="md:w-1/2 text-[28px] md:text-[38px] xl:text-[48px] font-semibold md:pr-4 text-grayH">
            <h3>{courses.title}</h3>
          </div>
          <div className="md:w-1/2 text-[14px] md:text-[16px] xl:text-[18px] text-grayPara md:inline md:py-4 md:pl-4 mt-2 md:mt-0 text-justify">
            {courses.description}
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
    <div className="flex justify-center items-center">
      <button onClick={handleEnroll} className="bg-blue-500 px-3 py-2 rounded-md">Enroll</button>
    </div>
    <div className="md:grid md:grid-cols-2 max-w-[1280px] xl:mx-auto gap-6 mt-10">
      {courses && courses.subCourse && courses.subCourse.map((subCourse, index) => (
          <OpenCourseCard key={index} subCourse={subCourse} />
      ))}
      </div>
  </div>
  );
}

export default CourseOpen;
