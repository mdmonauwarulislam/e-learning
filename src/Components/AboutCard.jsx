import React from 'react';
import { FaCrown } from "react-icons/fa";


function AboutCard() {
  return (
    <div className='bg-white px-8 py-8 rounded-md'>
        <FaCrown className='p-3 text-[52px] border border-OrangeBoreder rounded-md bg-[#FFF4E5] text-orangeBg' />
        <h4 className='md:text-[24px] text-[18px] font-semibold mt-4 '>Trusted by Thousands</h4>
        <p className="text-[12x] md:text-[16px] py-1 mt-2 md:mt-0 text-justify">We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.</p>

    </div>
  )
}

export default AboutCard