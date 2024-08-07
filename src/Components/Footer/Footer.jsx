
import logo from '../../assets/Image/Logo.png';
import { FaLocationDot, FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import { Link } from "react-router-dom";



function Footer() {
  return (
    <footer className="px-4 py-12 border-t-2 border-grayColor bg-gray-white md:px-8 lg:px-20 font-be-vietnam-pro">
      <div className="container flex flex-col justify-between mx-auto lg:flex-row ">
        <div className="mb-8 md:items-center lg:mb-0 text-grayH">
          <img src={logo} alt="Logo" className="w-10 h-10 mb-4 md:mb-0" />
          <div className="mt-5 space-y-3 text-center md:text-left text-[14px] md:text-[16px] xl:text-[18px]">
            <div className="flex items-center space-x-2">
              <TbMailFilled className="text-[24px] " />
              <p>mdmonauwarulislam@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2 ">
              <BsFillTelephoneFill className="text-[24px] " />
              <p>+916200791544</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaLocationDot className="text-[24px]" />
              <p>Hyderabad</p>
            </div>
          </div>
        </div>
        <div className="md:flex md:space-x-28">
          <div className='flex gap-16'>
            <div className="mb-8 md:mb-0">
              <h4 className="text-[16px] md:text-[18px] xl:text-[20px] text-grayH font-semibold mb-4">Home</h4>
              <ul className="space-y-2 text-[14px] md:text-[16px] xl:text-[18px] text-grayPara">
                <li>Benefits</li>
                <li>Our Courses</li>
                <li>Our Testimonials</li>
                <li>Our FAQ</li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h4 className="text-[16px] md:text-[18px] xl:text-[20px] text-grayH font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-[14px] md:text-[16px] xl:text-[18px] text-grayPara">
                <li>Company</li>
                <li>Achievements</li>
                <li>Our Goals</li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-[16px] md:text-[18px] xl:text-[20px] text-grayH font-semibold mb-4">Social Media</h4>
            <ul className="flex space-x-4 md:justify-evenly">
              <Link className="">
                <FaFacebook className="p-3 rounded-md text-[48px] border-2 border-grayColor bg-grayBg hover:shadow hover:shadow-orangeBg" />
              </Link>
              <Link className="">
                <FaSquareXTwitter className="p-3 rounded-md text-[48px] border-2 border-grayColor bg-grayBg hover:shadow hover:shadow-orangeBg" />
              </Link>
              <Link className="">
                <BsLinkedin className="p-3 rounded-md text-[48px] border-2 border-grayColor bg-grayBg hover:shadow hover:shadow-orangeBg" />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
