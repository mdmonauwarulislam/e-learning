/* eslint-disable react/jsx-no-undef */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const CoursePageCard = ({ course }) => {
  return (
    <div className="max-w-[1280px] xl:mx-auto mx-4 bg-white mt-10 rounded-lg p-4 xl:p-8 border-2 border-grayColor font-be-vietnam-pro">
      <h3 className="text-[20px] xl:text-[24px] font-semibold mb-2 text-blackH leading-none ">{course.title}</h3>
      <div className="rounded-lg md:flex items-center mt-2">
        <div className="md:w-3/4">
          <p className="text-[14px] md:text[16px] xl:text-[18px] font-normal text-blackPara mb-[24px] xl:mb-[30px]">{course.description}</p>
        </div>
        <div className="md:w-1/4 justify-end md:flex item-center">
          <Link to = "/CourseOpen">
          <button className="bg-white p-2 rounded hover:bg-orange-500 hover:text-white border-2 border-grayColor transition duration-300 w-auto">
            View Course
          </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between mt-6 gap-4">
        {course.images.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`image-${idx}`}
            className="md:h-80 h-24 md:w-96 w-24 rounded-lg border border-gray-300"
          />
        ))}
      </div>
      <div className="md:flex justify-between mt-5 ">
        <div className="flex space-x-3">
          {course.tags.map((tag, idx) => (
            <p
              key={idx}
              className="border-2 border-grayBg px-3 py-1 rounded-md text-[14px] xl:text-[18px] text-blackPara font-normal"
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="md:text-right ml-1 mt-2 md:mt-0 md:ml-0 text-[16px] xl:text-[20px] font-medium text-blackH">
          {course.author}
        </p>
      </div>
      <div className="border-2 border-grayColor mt-4  rounded-lg">
        <h2 className="text-[16px] md:text-[18px] xl:text-[22px] font-semibold py-4 px-6  border-b-2 border-grayColor text-grayH">
          Curriculum
        </h2>
        <div className="md:flex justify-between mt-4 px-2 ">
          {course.curriculum.map((item, idx) => (
            <div key={item.id} className="gap-10 px-6 md:flex justify-between">
              <div className="mb-4">
                <h2 className="text-[30px] md:text-[40px] xl:text-[50px] font-extrabold text-grayH">
                  {item.id < 10 ? `0${item.id}` : item.id}
                </h2>
                <p className="text-[14px] md:text-[16px] xl:text-[18px] font-medium text-grayPara">{item.title}</p>
              </div>
              {idx < course.curriculum.length - 1 && (
                <span className=" border-grayColor my-4 md:border-r-2 border-b-2" />
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
