// import React from 'react'
import { HiMiniCheck, HiMiniXMark  } from "react-icons/hi2";

function Pricing() {
  return (
    // <div className="border rounded-md ">
      <div className="w-1/2 rounded-md border   m-6 ">
        <div className="text-[16px] md:text-[22px] font-semibold px-4 py-2 text-[#262626] bg-[#FFF9F0] border border-OrangeBoreder mx-6 mt-6 rounded flex justify-center">
          <h3>Free Plan</h3>
        </div>
        <div className="text-[16px] md:text-[16px] text-[#262626] px-4 py-2 mx-6 my-4 flex justify-center">
          <h1>
            <span className="text-[56px] font-semibold">$76</span>/month
          </h1>
        </div>
        <div className=" border mx-6 mb-6 rounded-md ">
          <div className="flex justify-center font-semibold text-[12px] md:text-[16px] mt-4 text-[#262626]">
            <h3>Available Faetures</h3>
          </div>
          <div className="flex justify-start items-center gap-3 border py-3 px-4 mx-8 rounded-md mt-6 text-[#262626]">
            <HiMiniCheck className="p-1 rounded text-[24px] bg-[#FFF4E5]" />
            <p className="text-[10px] md:text-[14px] font-medium">
              Access to selected free course.
            </p>
          </div>
          <div className="flex justify-start items-center gap-3 border py-3 px-4 mx-8 rounded-md mt-4 text-[#262626]">
            <HiMiniXMark className="p-1 rounded text-[24px] border" />
            <p className="text-[10px] md:text-[14px] font-medium">
              Access to selected free course.
            </p>
          </div>
          
          <div className="text-[12px] md:text-[14px] font-semibold  py-3 bg-[#FF9500] text-[#fff]  mt-6 flex justify-center border-t rounded-b-md w-full ">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Pricing;
