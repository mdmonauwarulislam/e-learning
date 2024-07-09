/* eslint-disable react/prop-types */

// import { IoTimeOutline } from 'react-icons/io5';

function OpenCourseCard({ course }) {
  return (
    <div className="p-8 bg-white rounded-md shadow-md">
      <div>
        <div className="flex justify-end items-center w-full text-[50px] md:text-[60px] xl:text-[80px] leading-none py-2 font-bold text-gray-800">
          {course.subCourse.part}
        </div>
        <div>
          <h2 className="text-[18px] md:text-[20px] xl:text-[24px] font-semibold text-gray-800 mb-4">{course.subCourse.title}</h2>
        </div>
        <div className="space-y-4">
          {/* {course.subCourse.courseLesson.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border-2 border-gray-300 hover:border-yellow-400 hover:bg-yellow-50 cursor-pointer"
              onClick={() => (item.lessonVideoUrl)}
            >
              <div className="flex justify-between items-center">
                <div className="w-[73%]">
                  <h3 className="text-[16px] xl:text-[20px] font-medium text-gray-800">{item.lessonTitle}</h3>
                  <p className="text-[14px] xl:text-[16px] text-gray-600">{item.lessonNumber}</p>
                </div>
                <div className="flex p-2 text-[14px] xl:text-[18px] text-gray-600 justify-between items-center bg-gray-300 rounded gap-2 w-auto">
                  <IoTimeOutline />
                  {item.lessonDuration}
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}



export default OpenCourseCard;
