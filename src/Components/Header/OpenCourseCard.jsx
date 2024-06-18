import React from "react";
import { IoTimeOutline } from "react-icons/io5";

function OpenCourseCard() {
  const lessons = [
    {
      part: "01",
      title: "Understanding UI/UX Design Principles",
      duration: "45 Minutes",
      lessonNumber: "Lesson 01",
    },
    {
      part: "02",
      title: "Importance of User-Centered Design",
      duration: "1 Hour",
      lessonNumber: "Lesson 02",
    },
    {
      part: "03",
      title: "The Role of UI/UX Design in Product Development",
      duration: "45 Minutes",
      lessonNumber: "Lesson 03",
    },
  ];

  return (
    <div className="p-8 bg-white rounded-md ">
      <div className="text-[52px] font-bold mb-6 flex justify-end w-full">
        01
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Introduction to UI/UX Design
        </h2>
      </div>
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border hover:border-yellow-400 hover:bg-yellow-50`}
          >
            <div className="flex justify-between items-center ">
              <div className="w-[75%]">
                <h3 className="text-xl font-medium">{lesson.title}</h3>
                <p className="text-gray-600">{lesson.lessonNumber}</p>
              </div>
              <div className="flex p-2 justify-between items-center bg-gray-100 rounded gap-2 w-auto">
                <IoTimeOutline />
                {lesson.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OpenCourseCard;
