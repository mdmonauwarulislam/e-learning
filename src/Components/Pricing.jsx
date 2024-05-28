/* eslint-disable react/prop-types */
// import React from 'react'
import { HiMiniCheck, HiMiniXMark  } from "react-icons/hi2";

function Pricing(props) {
  return (
      <div className="md:w-1/2 rounded-md border md:m-6 w-full">
        <div className="text-[16px] md:text-[22px] font-semibold md:px-4 py-2 text-[#262626] bg-[#FFF9F0] border border-OrangeBoreder mx-6 mt-6 rounded flex justify-center w-auto">
          <h3>{props.title}</h3>
        </div>
        <div className="text-[16px] md:text-[16px] text-[#262626] px-4 py-2 mx-6 my-4 flex justify-center w-auto">
          <h1>
            <span className="text-[56px] font-semibold">{props.price}</span>{props.period}
          </h1>
        </div>
        <div className=" border mx-6 mb-6 rounded-md w-auto">
          <div className="flex justify-center font-semibold text-[12px] md:text-[16px] mt-4 text-[#262626]">
            <h3>Available Faetures</h3>
          </div>
          {props.features.map((item,index) => (
            <div className="flex justify-start items-center gap-3 py-3 px-4 mx-8 border rounded-md mt-6 text-[#262626]" key={index}>
              {item.isCross? <HiMiniCheck className="p-1 rounded text-[24px] bg-[#FFF4E5]" /> : <HiMiniXMark className="p-1 rounded text-[24px] border" />}
            
            <p className="text-[10px] lg:text-[14px] font-medium">
              {item.contents}
            </p>
            </div>
              
            ))}
          <div className="text-[12px] md:text-[14px] font-semibold  py-3 bg-[#FF9500] text-[#fff]  mt-6 flex justify-center border-t rounded-b-md w-full">
            <button>Get Started</button>
          </div>
        </div>
      </div>

  );
}

export default Pricing;
