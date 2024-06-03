/* eslint-disable react/prop-types */
// import React from 'react'
import LearningImg from "../assets/Image/learning.jpg";

function CourseCard(props) {
  return (
    <div className="bg-white p-6 rounded-lg">
      <img src={LearningImg} alt="Image" className="w-full mb-4 rounded" />
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <p className="mb-2 border px-2 rounded text-[14px] bg-gray-100">
            {props.tag1}
          </p>
          <p className="mb-2 border px-2 rounded text-[14px] bg-gray-100">
            {props.tag2}
          </p>
        </div>
        <p className="text-right mb-2 text-[18px] px-2 rounded ">
          {props.author}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
        <p className="text-gray-600 mb-4">{props.disc}</p>
        <button className="w-full bg-gray-100 border border-orangeBg hover:bg-orangeBg text-black hover:text-white py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
