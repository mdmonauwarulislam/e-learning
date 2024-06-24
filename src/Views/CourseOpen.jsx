/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import video from "../assets/Image/video.mp4";
import OpenCourseCard from "../Components/OpenCourseCard";


function CourseOpen() {
    const videoRef = useRef(null);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;

    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  const courses = [
    {
      part: "01",
      intro: "Introduction to UI/UX Design",
      lessons: [
        {
          title: "Understanding UI/UX Design Principles",
          duration: "45 Minutes",
          lessonNumber: "Lesson 01",
        },
        {
          title: "Importance of User-Centered Design",
          duration: "1 Hour",
          lessonNumber: "Lesson 02",
        },
        {
          title: "The Role of UI/UX Design in Product Development",
          duration: "45 Minutes",
          lessonNumber: "Lesson 03",
        },
      ],
    },
    {
      part: "02",
      intro: "Introduction to HTML",
      lessons: [
        {
          title: "Basic HTML Structure",
          duration: "30 Minutes",
          lessonNumber: "Lesson 01",
        },
        {
          title: "HTML Elements and Attributes",
          duration: "45 Minutes",
          lessonNumber: "Lesson 02",
        },
        {
          title: "Creating Forms in HTML",
          duration: "1 Hour",
          lessonNumber: "Lesson 03",
        },
      ],
    },
    {
      part: "02",
      intro: "Introduction to HTML",
      lessons: [
        {
          title: "Basic HTML Structure",
          duration: "30 Minutes",
          lessonNumber: "Lesson 01",
        },
        {
          title: "HTML Elements and Attributes",
          duration: "45 Minutes",
          lessonNumber: "Lesson 02",
        },
        {
          title: "Creating Forms in HTML",
          duration: "1 Hour",
          lessonNumber: "Lesson 03",
        },
      ],
    },
  ];


  return (
    <div className="pt-16 bg-grayBg pb-4">
      <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto ">
        <div className="md:w-1/2 text-[28px] md:text-[38px] xl:text-[48px] font-semibold md:pr-4 text-grayH">
          <h3>UI/UX Design Course</h3>
        </div>
        <div className="md:w-1/2 text-[14px] md:text-[16px] xl:text-[18px] text-grayPara md:inline md:py-4 md:pl-4 mt-2 md:mt-0 text-justify">
        Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum
        </div>
      </div>
      <div className="border border-grayColor mx-auto max-w-[1450px] my-12"></div>

      <div className="bg-grayBg">
        <div className=" flex items-center justify-center xl:mt-0 md:mt-[-300px] mt-[-480px] mx-4 max-w-[1280px] xl:mx-auto max-h-[675px]">
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
              controls="true"
              className="rounded"
            >
              <source src={video} type="video/mp4" />
            </video>
            <button onClick={handlePlayPause}></button>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 max-w-[1280px] xl:mx-auto gap-6 mt-10">
      {courses.map((course, index) => (
              <OpenCourseCard
                key={index}
                part={course.part}
                intro={course.intro}
                lessons={course.lessons}
              
              />
            ))}
      </div>
      </div>
  )
}

export default CourseOpen