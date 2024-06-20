/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import React from 'react';
import video from "../assets/Image/video.mp4";
import OpenCourseCard from "../Components/Header/OpenCourseCard";


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

  return (
    <div className="pt-16 bg-grayColor pb-4">
      <div className="md:flex justify-between items-center max-w-[1280px] xl:mx-auto ">
        <div className="md:w-1/2 md:text-[42px] text-[22px] font-semibold md:inline md:pr-4">
          <h3>UI/UX Design Course</h3>
        </div>
        <div className="md:w-1/2 text-[12x] md:text-[16px] md:inline md:py-4 md:pl-4 mt-2 md:mt-0 text-justify">
        Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum
        </div>
      </div>
      <div className="border border-gray-200 mx-auto max-w-[1450px] my-12"></div>

      <div className="bg-grayColor">
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
      <div className="grid grid-cols-2 max-w-[1280px] xl:mx-auto md:flex justify-between gap-6">
        <OpenCourseCard/>
      </div>
      </div>
  )
}

export default CourseOpen