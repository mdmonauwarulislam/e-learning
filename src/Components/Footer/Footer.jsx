
import logo from '../../assets/Image/Logo.png';
import mailIcon from '../../assets/Image/mailIcon.png'
import phoneIcon from '../../assets/Image/phoneIcon.png'
import locationIcon from '../../assets/Image/locationIcon.png'
// import { FacebookIcon, TwitterIcon, LinkedInIcon } from '@heroicons/react/solid';



function Footer() {
  return (
    <footer className="bg-gray-white text-black py-12 px-4 md:px-8 lg:px-20 font-be-vietnam-pro">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between ">
        <div className=" md:items-center lg:mb-0 mb-8">
          <img src={logo} alt="Logo" className="h-10 w-10 mb-4 md:mb-0" />
          <div className="mt-5 space-y-3 text-center md:text-left">
            <div className="text-black flex space-x-2">
              <img src={mailIcon} alt="MailIcon" className="h-6 w-6" />
              <p>mdmonauwarulislam@gmail.com</p>
            </div>
            <div className="text-black flex space-x-2">
              <img src={phoneIcon} alt="PhoneIcon" className="h-6 w-6" />
              <p>+916200791544</p>
            </div>
            <div className="text-black flex space-x-2">
              <img src={locationIcon} alt="LocationIcon" className="h-6 w-6" />
              <p>Hyderabad</p>
            </div>
          </div>
        </div>
        <div className="md:flex md:space-x-28">
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Home</h4>
            <ul className="space-y-2">
              <li>Benefits</li>
              <li>Our Courses</li>
              <li>Our Testimonials</li>
              <li>Our FAQ</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>Company</li>
              <li>Achievements</li>
              <li>Our Goals</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Social Media</h4>
            <ul className="flex space-x-4">
              {/* Include your social media icons here */}
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-linkedin"></i>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
