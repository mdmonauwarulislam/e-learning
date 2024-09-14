import { useState } from "react";
import logo from "../../assets/Image/Logo.png";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5"; // Import profile icon from React Icons

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Example state for authentication (set to true for testing)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  // Example logout function
  const handleLogout = () => {
    setIsAuthenticated(false); // Reset authentication state on logout
    // Implement additional logout logic like clearing cookies or tokens
  };

  // Toggle mobile menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close state
  };

  // Handle closing menu on link click
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when any link is clicked
  };

  return (
    <header className="bg-grayBg pt-5 flex justify-center px-4 font-be-vietnam-pro text-grayH">
      <div className="mx-auto w-full">
        {/* Announcement Banner */}
        <div className="bg-orangeBg text-white text-center px-2 py-3 rounded-lg mx-auto max-w-[1400px]">
          <p className="text-white text-[14px] md:text-[16px] xl:text-[18px]">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </p>
        </div>

        {/* Navbar */}
        <div className="bg-grayBg flex justify-between items-center py-4 max-w-[1280px] mx-auto">
          {/* Logo and Navigation Links */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <ul
              className={`md:flex md:items-center text-center text-[14px] font-normal xl:text-[18px] md:z-auto md:static absolute w-full left-0 gap-2 md:w-auto py-4 md:pl-0 md:opacity-100 top-[-400px] transition-all ease-in-out duration-300 ${
                isMenuOpen ? "top-16 opacity-100 bg-white" : "opacity-0"
              }`}
            >
              <Link to="/" onClick={handleLinkClick}>
                <li className="px-3 py-3 rounded-md hover:bg-grayColor md:ml-10 my-4 md:my-0">
                  Home
                </li>
              </Link>
              <Link to="/course" onClick={handleLinkClick}>
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  Courses
                </li>
              </Link>
              <Link to="/about" onClick={handleLinkClick}>
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  About Us
                </li>
              </Link>
              <Link to="/pricing" onClick={handleLinkClick}>
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  Pricing
                </li>
              </Link>
              <Link to="/contact" onClick={handleLinkClick}>
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          {/* Authentication Buttons */}
          <div className="space-x-2 font-medium flex items-center text-[14px] md:text-[16px] xl:text-[18px] text-blackH">
            {isAuthenticated ? (
              <>
                {/* Show Profile and Logout if Authenticated */}
                
                <Link to="/profile">
                  <button className="bg-white hover:bg-orangeBg hover:shadow border-2 border-grayColor hover:border-none hover:shadow-orangeBg py-3 px-3 rounded hover:text-white">
                  <IoPersonOutline/>
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-white hidden hover:bg-orangeBg hover:shadow border-2 border-grayColor hover:border-none hover:shadow-orangeBg py-3 px-3 rounded hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Show Login if Not Authenticated */}
                <Link to="/login">
                  <button className="bg-white hover:bg-orangeBg hover:shadow border-2 border-grayColor hover:border-none hover:shadow-orangeBg py-3 px-3 rounded hover:text-white">
                    Login
                  </button>
                </Link>
              </>
            )}
            {/* Mobile Menu Toggle */}
            <span
              className="text-4xl cursor-pointer mx-2 md:hidden block"
              onClick={handleToggleMenu}
            >
              <ion-icon name={isMenuOpen ? "close-outline" : "menu-outline"}></ion-icon>
            </span>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mx-auto max-w-[1450px] border-b-2 border-grayColor"></div>
      </div>
    </header>
  );
}

export default Header;
