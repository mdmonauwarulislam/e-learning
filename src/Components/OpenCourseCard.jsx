/* eslint-disable react/prop-types */
import { IoTimeOutline } from "react-icons/io5";

function OpenCourseCard(props) {

  return (
    <div className="p-8 bg-white rounded-md ">
      <div>
        <div className="flex justify-end items-center w-full text-[50px] md:text-[60px] xl:text-[80px] leading-none py-2 font-bold font-be-vietnam-pro text-grayH">
          {props.part}
        </div>
        <div>
          <h2 className="text-[18px] md:text-[20px] xl:text-[24px] font-semibold font-be-vietnam-pro text-blackH mb-4">{props.intro}</h2>
        </div>
        <div className="space-y-4">
          {props.lessons.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 border-grayColor hover:border-yellow-400 hover:bg-yellow-50`}
            >
              <div className="flex justify-between items-center font-be-vietnam-pro">
                <div className="w-[73%]">
                  <h3 className="text-[16px] xl:text-[20px] font-be-vietnam-pro text-blackH font-medium">{item.title}</h3>
                  <p className="text-[14px] xl:text-[16px] font-normal font-be-vietnam-pro text-blackPara">{item.lessonNumber}</p>
                </div>
                <div className="flex p-2 text-[14px] xl:text-[18px] text-blackPara justify-between items-center bg-grayColor rounded gap-2 w-auto font-be-vietnam-pro">
                  <IoTimeOutline />
                  {item.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpenCourseCard;
