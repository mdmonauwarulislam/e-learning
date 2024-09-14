/* eslint-disable react/prop-types */
import LearningImg from "../assets/Image/learning.jpg";
import {Link} from "react-router-dom";


const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

function CourseCard({course}) {

  const maxLength = 100;
  return (
    <div className="bg-white p-[24px] md:p-10 xl:p-[50px] rounded-lg font-be-vietnam-pro">
      <img src={LearningImg} alt="Image" className="w-full mb-[24px] rounded-md" />
      <div className="md:flex justify-between items-center ">
        <div className="flex space-x-4">
          <p className="border border-grayBg px-3 py-1 rounded-md text-[14px] xl:text-[18px] text-blackPara font-normal">
          {course.weekDuration}
          </p>
          <p className="border border-grayBg px-3 py-1 rounded-md text-[14px] xl:text-[18px] text-blackPara font-normal">
          {course.courseLevel}
          </p>
        </div>
        <p className="md:text-right ml-1 mt-2 md:mt-0 md:ml-0 text-[16px] xl:text-[20px] font-medium text-blackH">
          {course.createdBy.fullName}
        </p>
      </div>
      <div className="mt-[24px]">
        <h3 className="text-[20px] xl:text-[24px] font-semibold mb-2 text-blackH leading-none ">{course.title}</h3>
        <p className="text-[14px] md:text[16px] xl:text-[18px] font-normal text-blackPara mb-[24px] xl:mb-[30px]">{truncateText(course.description, maxLength)}</p>
        <Link to = {`/CourseOpen/${course._id}`}>
        <button className="w-full bg-grayBg border-2 outline-none border-grayColor hover:bg-orangeBg text-blackH hover:text-white py-3 rounded-md text-[14px] xl:text-[18px]">
          Get it Now
        </button>
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
