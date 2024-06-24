/* eslint-disable react/prop-types */
// import React from 'react'
import { HiMiniCheck, HiMiniXMark } from "react-icons/hi2";

function Pricing(props) {
  return (
    <div className="md:w-1/2 rounded-md border-2 border-grayColor md:m-6 w-full font-be-vietnam-pro mt-5 md:mt-0">
      <div className="text-[16px] md:text-[18px] xl:text-[22px] font-medium md:px-4 py-3 text-grayH bg-[#FFF9F0] border border-OrangeBoreder mx-6 mt-6 rounded flex justify-center w-auto">
        <h3>{props.title}</h3>
      </div>
      <div className="text-grayH px-4 py-2 mx-6 my-4 flex justify-center w-auto">
        <h1 className="text-[14px] md:text-[16px] xl:text-[20px] font-medium">
          <span className="text-[50px] md:text-[60px] xl:text-[80px] font-semibold">{props.price}</span>{props.period}
        </h1>
      </div>
      <div className=" border-2 border-grayColor mx-6 mb-6 rounded-md w-auto">
        <div className="flex justify-center font-medium text-[18px] xl:text-[20px] mt-4 text-grayH">
          <h3>Available Faetures</h3>
        </div>
        {props.features.map((item, index) => (
          <div className="flex justify-start items-center gap-3 py-3 px-4 mx-8 border-2 border-grayColor rounded-md mt-6 text-grayPara" key={index}>
            {item.isCross ? <HiMiniCheck className="p-1 rounded-md text-[24px] xl:text-[28px] bg-[#FFF4E5]" /> : <HiMiniXMark className="p-1 rounded text-[24px] xl:text-[28px] border" />}

            <p className="text-[14px] lg:text-[18px] font-normal text-grayPara">
              {item.contents}
            </p>
          </div>

        ))}
        <div className="text-[12px] md:text-[14px] font-semibold  py-4 bg-[#FF9500] text-[#fff]  mt-6 flex justify-center border-t border-grayColor rounded-b-md w-full">
          <button>Get Started</button>
        </div>
      </div>
    </div>

  );
}

export default Pricing;
