/* eslint-disable no-undef */



import React from "react";
import PropTypes from "prop-types";
// import Image from "../assets/Image/learning.jpg";

const CoursePageCard = ({ course }) => {
  return (
    <div className="max-w-[1280px] xl:mx-auto mx-4 bg-white mt-10 rounded-lg p-4 xl:p-8 border border-gray-300">
      <h3 className="text-xl md:text-2xl font-bold">{course.title}</h3>
      <div className="rounded-lg md:flex mt-2">
        <div className="md:w-3/4">
          <p className="text-[16px] md:text-[18px]">{course.description}</p>
        </div>
        <div className="md:w-1/4 justify-end md:flex mt-2">
          <button className="bg-white p-2 rounded hover:bg-orange-500 hover:text-white border border-orange-500 transition duration-300 w-auto">
            View Course
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        {course.images.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`image-${idx}`}
            className="md:h-80 h-24 md:w-96 w-28 rounded-lg border border-gray-300"
          />
        ))}
      </div>
      <div className="md:flex justify-between mt-5 ">
        <div className="flex space-x-3">
          {course.tags.map((tag, idx) => (
            <p
              key={idx}
              className="mb-2 border px-2 rounded text-[14px] bg-gray-100"
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="md:text-right mb-2 text-[18px] px-2 rounded">
          {course.author}
        </p>
      </div>
      <div className="border border-gray-300 mt-4  rounded-lg">
        <h2 className="text-[20px] xl:text-[22px] font-semibold py-4 px-6  border-b border-gray-300">
          Curriculum
        </h2>
        <div className="md:flex justify-between mt-4 px-2 ">
          {course.curriculum.map((item, idx) => (
            <div key={item.id} className="gap-10 px-6 md:flex justify-between">
              <div className="mb-4">
                <h2 className="text-[32px] font-bold ">
                  {item.id < 10 ? `0${item.id}` : item.id}
                </h2>
                <p className="text-[14px] font-medium">
                  {item.title}
                </p>
              </div>
              {idx < course.curriculum.length - 1 && (
                <span className=" border-gray-300 my-4 md:border-r border-b" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CoursePageCard.propTypes = {
    course: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      author: PropTypes.string.isRequired,
      curriculum: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

export default CoursePageCard;
