import { FaLocationDot, FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <div className="md:flex items-center justify-center bg-white  max-w-[1280px] mx-auto rounded-lg  md:py-0 py-4 font-be-vietnam-pro outline-none">
      <div className="rounded-lg w-full h-full md:pl-16 md:px-0 px-4">
        <form className="md:pr-16">
          <div className="md:flex gap-6  text-[14px] md:text-[16px] xl:text-[18px] ">
            <div className="md:w-1/2 w-full md:mt-0 mt-6">
              <label className=" font-medium text-blackH" htmlFor="firstName">
                First Name
              </label>
              <input
                className="border-2 border-grayColor rounded-md w-full py-4 px-4 mt-3 outline-none text-blackPara font-normal  hover:border-grayH hover:border-2"
                id="firstName"
                type="text"
                placeholder="Enter First Name"
              />
            </div>
            <div className="md:w-1/2 w-full md:mt-0 mt-6">
              <label className="  font-medium text-blackH" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="border-2 border-grayColor rounded-md w-full py-4 px-4 mt-3 outline-none text-blackPara font-normal hover:border-grayH hover:border-2"
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
          </div>

          <div className="mt-6 md:flex gap-6 w-full">
            <div className="md:w-1/2 w-full text-[14px] md:text-[16px] xl:text-[18px] ">
              <label className="  font-medium text-blackH" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-grayColor rounded-md w-full py-4 px-4 mt-3 outline-none text-blackPara font-normal hover:border-grayH hover:border-2"
                id="email"
                type="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="md:w-1/2 w-full md:mt-0 mt-6">
              <label className=" font-medium text-blackH " htmlFor="phone">
                Phone
              </label>
              <input
                className="border-2 border-grayColor rounded-md w-full py-4 px-4 mt-3 outline-none text-blackPara font-normal hover:border-grayH hover:border-2"
                id="phone"
                type="text"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>

          <div className="mt-6 w-full text-[14px] md:text-[16px] xl:text-[18px] ">
            <label className="font-medium text-blackH" htmlFor="subject">
              Subject
            </label>
            <input
              className="border-2 border-grayColor rounded-md w-full py-4 px-4 mt-3 outline-none text-blackPara font-normal hover:border-grayH hover:border-2"
              id="subject"
              type="text"
              placeholder="Enter your Subject"
            />
          </div>
          <div className="mt-6 w-full text-[14px] md:text-[16px] xl:text-[18px] ">
            <label className="md:text-xl font-medium text-blackH" htmlFor="message">
              Message
            </label>
            <textarea
              className="  border-2 border-grayColor rounded-md w-full py-4 px-4 mt-3 text-blackPara font-normal resize-none outline-none hover:border-grayH hover:border-2"
              id="message"
              rows="5"
              placeholder="Enter your Message here..."
            />
          </div>
          <div className="mt-6 w-full  text-[14px] md:text-[16px] xl:text-[18px] font-medium flex justify-center">
            <button
              className="bg-grayBg hover:bg-orangeBg text-blackH hover:text-white p-4 border-2 border-grayColor hover:shadow hover:shadow-orangeBg rounded-md md:w-auto w-full"
              type="button"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
      <div className="md:border-l-2 md:py-[380px] md:px-8 py-4 md:border-t-0 border-t-2 border-grayColor md:mt-0 mt-10  text-blackH"></div>
      <div className="flex flex-col justify-center items-center gap-6 md:py-0 py-4 md:pr-16 md:px-0 px-4">
        <div className="flex flex-col justify-center items-center border rounded w-[290px] h-[143.5px] gap-4">
          <TbMailFilled className="p-3 rounded-md text-[48px] border-2 border-grayColor bg-grayBg" />
          <p className="text-[14px] md:text-[16px] xl:text-[18px] font-normal text-blackH ">support@skillbridge.com</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-grayColor rounded w-[290px] h-[143.5px] gap-4">
          <BsFillTelephoneFill className="p-3 rounded-md text-[48px] bborder-2 border-grayColor bg-grayBg" />
          <p className="text-[14px] md:text-[16px] xl:text-[18px] font-normal text-blackH  ">+91 00000 00000</p>
        </div>
        <div className="flex flex-col justify-center items-center border rounded w-[290px] h-[143.5px] gap-4">
          <FaLocationDot className="p-3 rounded-md text-[48px] border-2 border-grayColor bg-grayBg" />
          <p className="text-[14px] md:text-[16px] xl:text-[18px] font-normal text-blackH">Some Where in the World </p>
        </div>

        <div className="flex flex-col justify-center items-center border-2 border-grayColor rounded w-[290px] h-[143.5px] gap-4">
          <div className="flex flex-row gap-3">
            <Link className="">
              <FaFacebook className="p-3 rounded-md text-[48px] border-2 border-grayColor bg-grayBg hover:shadow hover:shadow-orangeBg" />
            </Link>
            <Link className="">
              <FaSquareXTwitter className="p-3 rounded-md text-[48px] border-2 border-grayColor bg-grayBg hover:shadow hover:shadow-orangeBg" />
            </Link>
            <Link className="">
              <BsLinkedin className="p-3 rounded-md text-[48px] border-2 border-grayColor bg-grayBg hover:shadow hover:shadow-orangeBg" />
            </Link>
          </div>
          <p className="text-[14px] md:text-[16px] xl:text-[18px] font-normal text-blackH block">Social Profiles</p>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
