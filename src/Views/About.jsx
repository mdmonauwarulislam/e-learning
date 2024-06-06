/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AboutCard from "../Components/AboutCard";
///ojdijdh
function About() {
  const cont
  return (
    <div className="pt-16 bg-grayColor pb-4">
      <div className="md:flex justify-between max-w-[1280px] xl:mx-auto mx-4 pb-12">
        <div className="md:w-1/2 md:text-[42px] text-[22px] font-semibold md:pr-4">
          <h3 className="pt-4">About Skillbridge</h3>
        </div>
        <div className="md:w-1/2 text-[12x] md:text-[16px] md:py-4 md:pl-4 mt-2 md:mt-0 text-justify">
        Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.
        </div>
      </div>
      <div className="border max-w-[1400px] xl:mx-auto mx-4 mb-12"></div>
      <div className="max-w-[1280px] xl:mx-auto mx-4">
        <h3 className="md:text-[42px] text-[22px] font-semibold ">About Skillbridge</h3>
        <p className="text-[12x] md:text-[16px] md:py-3 mt-2 md:mt-0 text-justify">Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
      </div>
      <div className="max-w-[1280px] xl:mx-auto mx-4 md:grid grid-cols-2 gap-6 space-y-4 md:space-y-0 mt-10">
        <AboutCard/>
        <AboutCard/>
        <AboutCard/>
        <AboutCard/>
      </div>
    </div>
  );
}

export default About;
