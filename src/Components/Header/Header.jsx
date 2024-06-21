import { useState } from "react";
import logo from "../../assets/Image/Logo.png";
import { Link } from "react-router-dom";
// import "../../assets/Style/style.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-grayBg pt-5 flex justify-center px-4 font-be-vietnam-pro">
      <div className="mx-auto w-full ">
        <div className="bg-orangeBg text-white text-center px-2 py-3 rounded-lg mx-auto max-w-[1400px]">
          <p className="text-white md:text-[14px] xl:text-[18px]">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </p>
        </div>
        <div className="bg-grayBg flex justify-between items-center py-4 max-w-[1280px] mx-auto">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-10 w-10" />
            <ul
              className={`md:flex md:items-center text-center text-[14px] font-normal xl:text-[18px]  md:z-auto md:static absolute w-full left-0 gap-2 md:w-auto md:py-0 py-4 md:pl-0 md:opacity-100 opacity-0 top-[-400px] ${
                menuOpen
                  ? "top-[150px] opacity-100 z-10 bg-grayBg text-xl text-center"
                  : "top-[calc(100%+20px)] opacity-0 "
              }`}
            >
              <Link to="/" onClick={closeMenu}>
                <li className="px-3 py-3 rounded-md hover:bg-grayColor ml-10 my-4 md:my-0 ">
                  Home
                </li>
              </Link>
              <Link to="/Course" onClick={closeMenu}>
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  Courses
                </li>
              </Link>
              <Link to="/About" onClick={closeMenu}>
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  About Us
                </li>
              </Link>
              <Link to="/Pricing" onClick={closeMenu}>
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  Pricing
                </li>
              </Link>
              <Link to="/Contact" onClick={closeMenu}>
                <li className="py-3 px-3 rounded-md hover:bg-grayColor my-4 md:my-0">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className={`space-x-2 font-semibold items-center flex`}>
            <>
              <Link to = "/Signup">
              <button className="bg-white hover:bg-orangeBg py-2 px-3 rounded hover:text-white">
                Sign Up
              </button>
              </Link>
              <Link to = "/Login">
              <button className="bg-white hover:bg-orangeBg py-2 px-3 rounded hover:text-white">
                Login
              </button>
              </Link>
              <span
                className="text-4xl cursor-pointer mx-2 md:hidden block"
                onClick={toggleMenu}
              >
                <ion-icon
                  name={menuOpen ? "close-outline" : "menu-outline"}
                ></ion-icon>
              </span>
            </>
          </div>
        </div>
        <div className=" mx-auto max-w-[1450px] border-b-2 border-grayColor"></div>
      </div>
      
    </header>
  );
}

export default Header;
