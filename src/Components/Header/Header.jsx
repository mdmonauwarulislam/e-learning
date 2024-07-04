import { useState } from "react";
import logo from "../../assets/Image/Logo.png";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5"; // Import profile icon from React Icons

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Example state for authentication

  // Example logout function
  const handleLogout = () => {
    // Implement logout logic here
    setIsAuthenticated(false); // Example: Reset authentication state
    // Additional logic like clearing cookies, etc.
  };

  return (
    <header className="bg-grayBg pt-5 flex justify-center px-4 font-be-vietnam-pro text-grayH">
      <div className="mx-auto w-full">
        <div className="bg-orangeBg text-white text-center px-2 py-3 rounded-lg mx-auto max-w-[1400px]">
          <p className="text-white text-[14px] md:text-[16px] xl:text-[18px]">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </p>
        </div>
        <div className="bg-grayBg flex justify-between items-center py-4 max-w-[1280px] mx-auto">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-10 w-10" />
            <ul className="md:flex md:items-center text-center text-[14px] font-normal xl:text-[18px] md:z-auto md:static absolute w-full left-0 gap-2 md:w-auto md:py-0 py-4 md:pl-0 md:opacity-100 opacity-0 top-[-400px]">
              <Link to="/">
                <li className="px-3 py-3 rounded-md hover:bg-grayColor md:ml-10 my-4 md:my-0">
                  Home
                </li>
              </Link>
              <Link to="/course">
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  Courses
                </li>
              </Link>
              <Link to="/about">
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  About Us
                </li>
              </Link>
              <Link to="/pricing">
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  Pricing
                </li>
              </Link>
              <Link to="/contact">
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="space-x-2 font-medium flex items-center text-[14px] md:text-[16px] xl:text-[18px] text-blackH">
            {isAuthenticated ? (
              <>
                <IoPersonOutline
                  className="text-4xl cursor-pointer mx-2 md:hidden block"
                  onClick={() => alert("Navigate to profile page")}
                />
                <Link to="/profile">
                  <button className="bg-white hover:bg-orangeBg hover:shadow border-2 border-grayColor hover:border-none hover:shadow-orangeBg py-3 px-3 rounded hover:text-white">
                    Profile
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-white hover:bg-orangeBg hover:shadow border-2 border-grayColor hover:border-none hover:shadow-orangeBg py-3 px-3 rounded hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <button className="bg-white hover:bg-orangeBg hover:shadow border-2 border-grayColor hover:border-none hover:shadow-orangeBg py-3 px-3 rounded hover:text-white">
                    Sign Up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="bg-white hover:bg-orangeBg hover:shadow border-2 border-grayColor hover:border-none hover:shadow-orangeBg py-3 px-3 rounded hover:text-white">
                    Login
                  </button>
                </Link>
                <Link to="/profile">
                  <button className="bg-white hover:bg-orangeBg hover:shadow border-2 border-grayColor hover:border-none hover:shadow-orangeBg py-3 px-3 rounded hover:text-white">
                    Profile
                  </button>
                </Link>
              </>
            )}
            <span
              className="text-4xl cursor-pointer mx-2 md:hidden block"
              onClick={() => alert("Toggle menu")}
            >
              <ion-icon name="menu-outline"></ion-icon>
            </span>
          </div>
        </div>
        <div className="mx-auto max-w-[1450px] border-b-2 border-grayColor"></div>
      </div>
    </header>
  );
}

export default Header;
