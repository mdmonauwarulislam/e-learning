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
    <header className="bg-grayColor pt-5 flex justify-center px-4">
      <div className="mx-auto w-full ">
        <div className="bg-orangeBg text-white text-center p-2 rounded mx-auto max-w-[1280px]">
          <p className="text-white">
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </p>
        </div>
        <div className="bg-grayColor flex justify-between items-center py-4 max-w-[1280px] mx-auto">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-10 w-10" />
            <ul
              className={`md:flex md:items-center text-center  md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-out duration-300 ${
                menuOpen
                  ? "top-[120px] opacity-100 z-10 bg-grayColor text-xl text-center"
                  : "top-[calc(100%+20px)] opacity-0 "
              }`}
            >
              <Link to="/" onClick={closeMenu}>
                <li className="hover:text-orangeBg p-2 rounded hover:bg-slate-200 mx-4 my-4 md:my-0 ">
                  Home
                </li>
              </Link>
              <Link to="/" onClick={closeMenu}>
                <li className="hover:text-orangeBg p-2 rounded hover:bg-slate-200 mx-4 my-4 md:my-0">
                  Courses
                </li>
              </Link>
              <Link to="/About" onClick={closeMenu}>
                <li className="hover:text-orangeBg p-2 rounded hover:bg-slate-200 mx-4 my-4 md:my-0">
                  About Us
                </li>
              </Link>
              <Link to="/" onClick={closeMenu}>
                <li className="hover:text-orangeBg p-2 rounded hover:bg-slate-200 mx-4 my-4 md:my-0">
                  Pricing
                </li>
              </Link>
              <Link to="/Contact" onClick={closeMenu}>
                <li className="hover:text-orangeBg p-2 rounded hover:bg-slate-200 mx-4 my-4 md:my-0">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className={`space-x-2 font-semibold items-center flex`}>
            <>
              <button className="bg-white hover:bg-orangeBg p-2 rounded hover:text-white">
                Sign Up
              </button>
              <button className="bg-orangeBg hover:bg-white p-2 rounded hover:text-black text-white">
                Login
              </button>
              <span
                className="text-3xl cursor-pointer mx-2 md:hidden block"
                onClick={toggleMenu}
              >
                <ion-icon
                  name={menuOpen ? "close-outline" : "menu-outline"}
                ></ion-icon>
              </span>
            </>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
