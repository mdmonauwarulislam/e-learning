import React from "react";
import { FaLocationDot, FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";

const ContactCard = () => {
  return (
    <div className="md:flex items-center justify-center bg-white  max-w-[1280px] mx-auto rounded-lg  md:py-0 py-4">
      <div className="rounded-lg w-full h-full md:pl-16 md:px-0 px-4">
        <form className="md:pr-16">
          <div className="md:flex gap-6 md:text-[16px] font-medium">
            <div className="md:w-1/2 w-full md:mt-0 mt-6">
              <label className="" htmlFor="firstName">
                First Name
              </label>
              <input
                className="border-2 rounded-md w-full py-4 px-4 mt-3 outline-none"
                id="firstName"
                type="text"
                placeholder="Enter First Name"
              />
            </div>
            <div className="md:w-1/2 w-full md:mt-0 mt-6">
              <label className="" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="border-2 rounded-md w-full py-4 px-4 mt-3 outline-none"
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
          </div>

          <div className="mt-6 md:flex gap-6 md:text-[16px] font-medium w-full">
            <div className="md:w-1/2 w-full">
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 rounded-md w-full py-4 px-4 mt-3 outline-none"
                id="email"
                type="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="md:w-1/2 w-full md:mt-0 mt-6">
              <label className=" " htmlFor="phone">
                Phone
              </label>
              <input
                className="border-2 rounded-md w-full py-4 px-4 mt-3 outline-none"
                id="phone"
                type="text"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>

          <div className="mt-6 w-full md:text-[16px] font-medium">
            <label className="" htmlFor="subject">
              Subject
            </label>
            <input
              className="border-2 rounded-md w-full py-4 px-4 mt-3 outline-none"
              id="subject"
              type="text"
              placeholder="Enter your Subject"
            />
          </div>
          <div className="mt-6 w-full md:text-[16px] font-medium">
            <label className="md:text-xl" htmlFor="message">
              Message
            </label>
            <textarea
              className=" border-2 rounded-md w-full py-4 px-4 mt-3 resize-none outline-none"
              id="message"
              rows="5"
              placeholder="Enter your Message here..."
            />
          </div>
          <div className="mt-6 w-full md:text-[16px] font-medium flex justify-center">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white p-4 rounded-md md:w-auto w-full"
              type="button"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
      <div className="md:border-l md:py-[380px] md:px-8 py-4 md:border-t-0 border-t md:mt-0 mt-10 "></div>
      <div className="flex flex-col justify-center items-center gap-6 md:py-0 py-4 md:pr-16 md:px-0 px-4">
        <div className="flex flex-col justify-center items-center border rounded w-[290px] h-[143.5px] gap-4">
          <TbMailFilled className="p-3 rounded-md text-[48px] border bg-gray-100" />
          <p className="md:text-[18px] ">support@skillbridge.com</p>
        </div>
        <div className="flex flex-col justify-center items-center border rounded w-[290px] h-[143.5px] gap-4">
          <BsFillTelephoneFill className="p-3 rounded-md text-[48px] border bg-gray-100" />
          <p className="md:text-[18px] ">+91 00000 00000</p>
        </div>
        <div className="flex flex-col justify-center items-center border rounded w-[290px] h-[143.5px] gap-4">
          <FaLocationDot className="p-3 rounded-md text-[48px] border bg-gray-100" />
          <p className="md:text-[18px] ">Some Where in the World </p>
        </div>

        <div className="flex flex-col justify-center items-center border rounded w-[290px] h-[143.5px] gap-4">
          <div className="flex flex-row gap-3">
            <a href="#" className="">
              <FaFacebook className="p-3 rounded-md text-[48px] border bg-gray-100" />
            </a>
            <a href="#" className="">
              <FaSquareXTwitter className="p-3 rounded-md text-[48px] border bg-gray-100" />
            </a>
            <a href="#" className="">
              <BsLinkedin className="p-3 rounded-md text-[48px] border bg-gray-100" />
            </a>
          </div>
          <p className="md:text-[18px]  block">Social Profiles</p>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
