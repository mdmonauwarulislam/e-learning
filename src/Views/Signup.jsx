import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Testinmonial from "../Components/Testinmonial";
import SignupCard from '../Components/SignupCard';

function Signup() {
    const testimonial = [
      {
        review:
          "Very good coursework around yout existing commitements and obligations",
        user: "Monauwarul",
      },
    ];
    return (
      <div className="pt-16 bg-grayColor pb-4 ">
        <div className="md:flex md:flex-row sm:flex-col justify-between items-center max-w-[1280px] xl:mx-auto mx-4 pb-12">
          <div className="md:w-[55%] pr-10 md:order-1 order-2">
            <div className="md:mr-16">
              <div className=" md:text-[42px] text-[22px] font-semibold md:pr-4">
                <h3 className="pt-4">Students Testimonials</h3>
              </div>
              <div className="text-[14x] md:text-[16px] mt-2 md:mt-0 text-justify font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate, vero, laborum optio harum ad esse facere nesciunt
                inventore explicabo eveniet eum animi quae! Quia mollitia,
                obcaecati aut iusto provident similique.
              </div>
            </div>
  
            <div className="pt-10 ">
              {testimonial.map((item, index) => (
                <Testinmonial key={index} review={item.review} user={item.user} />
              ))}
            </div>
            <div className="flex float-end gap-3 mt-4">
              <FaArrowLeft  className="p-4 border rounded-md text-[52px] bg-white"/>
              <FaArrowRight className="p-4 border rounded-md text-[52px] bg-white" />
            </div>
          </div> 
          <div className="md:w-[45%] md:pl-10 md:order-2 order-1">
              <SignupCard/>
          </div>
        </div>
      </div>
    );
  }
  

export default Signup