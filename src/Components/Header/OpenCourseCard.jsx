/* eslint-disable react/prop-types */
import { IoTimeOutline } from "react-icons/io5";

function OpenCourseCard(props) {
  
  return (
    <div className="p-8 bg-white rounded-md ">
        <div>
          <div className="text-[80px] font-bold mb-6 flex justify-end ">
            {props.part}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">{props.intro}</h2>
          </div>
          <div className="space-y-4">
            {props.lessons.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border hover:border-yellow-400 hover:bg-yellow-50`}
              >
                <div className="flex justify-between items-center">
                  <div className="w-[75%]">
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <p className="text-gray-600">{item.lessonNumber}</p>
                  </div>
                  <div className="flex p-2 justify-between items-center bg-gray-100 rounded gap-2 w-auto">
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
